import { useRouter } from "next/router";
import data from "../../../data/course.js"
import { useState } from 'react';

export default function Course({ clgdata }) {
    const router = useRouter();
    const course = router.query.course;
    console.log(clgdata);
    return (

        <>
            <div className="max-w-7xl mx-auto py-20 ">
                <div className="w-full flex justify-center items-center uppercase text-6xl font-bold text-transparent md:text-3xl bg-clip-text bg-gradient-to-b from-teal-400 via-teal-600 to-teal-800 ">{course}</div>

                {/*key is set because of the way react handles the keys */}
                {Object.entries(clgdata).map(([key, value]) => {
                    return (
                        <div key="a" className="w-full justify-center items-center uppercase p-10 text-6xl">
                            <div className="w-full flex uppercase text-4xl animate-pulse mb-4">{key}</div>
                            {value.map((clg) => {
                                return (
                                    <div key="b" className="py-3 px-5 mb-4 bg-gray-300 text-xl text-gray-900 rounded-md border border-gray-400" role="alert">
                                        {clg}
                                    </div>

                                )
                            })}
                        </div>
                    )
                })}




            </div>
        </>
    );
}


export async function getStaticPaths() {
    const paths = [];
    for (let key in data) {
        paths.push({
            params: {
                course: key
            }
        });
    }
    console.log(paths);
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    let course = null;
    for (let key in data) {
        if (key == params.course) {
            course = data[key];
        }
    }
    return {
        props: {
            clgdata: course
        }
    }
}