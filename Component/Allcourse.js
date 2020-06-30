import React,{useState} from 'react' 
import Course from './Course'

const Allcourse = () => {

  const [courses, Setcourses] = useState([
    {Subtitle:"React Course",Text:"It is a React Course For Biginners"},
    {Subtitle:"Java Course",Text:"It is a Java Course For Biginners"},
    {Subtitle:"JavaScript",Text:"It is a JavaScript Course For Biginners"},
    {Subtitle:"Python",Text:"It is a Python Course For Biginners"},
  ]);

  return(
    <div className="text-center">
    <h1>All Course</h1>
    <p>List Of Course are as following</p>
    {courses.length > 0
      ? courses.map((item,i) => <Course key={i} course={item}/>) 
      : "No Course"}
    </div>
  )
}

export default Allcourse