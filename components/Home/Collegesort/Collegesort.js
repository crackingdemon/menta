import React from 'react';
import data from '../../../data/course';
import { useRouter } from 'next/router';

const Collegesort = () => {
  const router = useRouter();
  const [course, setCourse] = React.useState("engineering");
  const [exam, setExam] = React.useState("Any");
  const [searchtitle, setSearchTitle] = React.useState(false);
  const changeCourseOptionHandler = (event) => {
    setCourse(event.target.value);
    setExam('Any');
    if (event.target.value == "Search By State") {
      setSearchTitle(true);
    } else {
      setSearchTitle(false);
    }
  };
  const changeExamOptionHandler = (event) => {
    setExam(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (exam === 'Any') {
      router.push(`/college/${course}/`);
    } else {
      router.push(`/college/${course}/${exam}`);
    }
  };
  let type = [];
  let options = null;
  let colleges = [];
  let collegeoptions = null;
  for (const key in data) {
    colleges.push(key);
  }
  collegeoptions = colleges.map((el) => <option key={el}>{el}</option>);
  for (const key in data) {
    if (key === course) {
      for (const k in data[key]) {
        type.push(k);
      }
    }
  }
  options = type.map((el) => <option key={el}>{el}</option>);

  return <>
    <center>
      <div className="mt-10 p-4  bg-white items-center animate-bounce	">
        <div className="inline-flex  bg-white leading-none text-black rounded-full p-2 shadow text-4xl items-center 	">
          <span className="inline-flex bg-black text-white rounded-full h-8 p-5 pb-7 justify-center items-center text-">College</span>
          <span className="inline-flex px-2">sort</span>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center p-5 bg-white rounded-lg mb-10">
          <div className="flex ml-3 md:ml-0 text-2xl flex-col md:flex-row">
            <div className="">
              <div className="text-black mb-2">Course</div>
              <select onChange={changeCourseOptionHandler} className="text-black border-2 border-black w-64 md:w-96 p-2 rounded  mr-4">
                {collegeoptions}
              </select>
            </div>
            <div className="pt-6 md:pt-0 md:pl-6">
              <div className="text-black mb-2">{searchtitle ? 'Select State' : 'Exam'}</div>
              <select onChange={changeExamOptionHandler} className="text-black border-2 border-black w-64 md:w-92 p-2 rounded  mr-4">
                <option>Any</option>
                {options}
              </select>
            </div>
            <div className="flex bg-transparent">
              {/* <div className="pt-6 md:pt-0 md:pl-6">
                <div className="text-black mb-2">Category</div>
                <select name="lang" className="text-black w-32 border-2 border-black  p-2 rounded ">
                  <option>Any</option>
                </select>
              </div> */}
              <div>
                <button onClick={handleSubmit} type="submit" style={{ "border": "2px solid black" }}
                  className="mt-6 md:mt-0 text-black hover:bg-black hover:text-white border-black rounded ml-5 w-24 h-24">Go
                  !</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </center>
  </>;
};

export default Collegesort;
