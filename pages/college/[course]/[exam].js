import { useRouter } from "next/router";
import data from "../../../data/course.js"

export default function Exam({ clgdata }) {
    const router = useRouter();
    const { course, exam } = router.query;
    console.log(clgdata)
    return (
        <>
            <div className="max-w-7xl mx-auto py-20 ">
                <div className="w-full flex justify-center items-center uppercase text-6xl font-bold text-transparent md:text-3xl bg-clip-text bg-gradient-to-b from-teal-400 via-teal-600 to-teal-800 ">{exam}</div>

                <div className="p-10">
                    {clgdata.map((clg) => {
                        return (
                            // key is set because of the way react handles the keys
                            <div key="a" className="w-full justify-center text-white	 items-center uppercase text-xl">
                                <div className="py-3 px-5 mb-4 bg-gray-300 text-xl text-gray-900 rounded-md border border-gray-400" role="alert">
                                    {clg}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
}


export async function getStaticPaths() {
    const paths = [];
    for (let key in data) {
        for (let k in data[key]) {
            paths.push({
                params: {
                    exam: k,
                    course: key
                }
            });
        }
    }
    return {
        paths,
        fallback: false
    }
}



export async function getStaticProps({ params }) {
    let course = null;
    for (let key in data) {
        if (key == params.course) {
            for (let k in data[key]) {
                if (k == params.exam) {
                    course = data[key][k];
                }
            }
        }
    }
    // console.log(course);
    return {
        props: {
            clgdata: course
        }
    }
}