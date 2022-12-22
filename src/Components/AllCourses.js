import React, { useState } from 'react'
import Course from './Course'

function AllCourses() {
    const [courses,setCourses]=useState([
        {title:"Java Course",description:"This is a java courses"},
        {title:"React Course",description:"This is a React courses"},
        {title:"Angular Course",description:"This is a Angular courses"}
    ])
    const courselist=courses.map((item)=> <Course courses={item}/>)
  return (
    <div>
        <h1>All Course</h1>
        {/* {
            courses.length>0?courses.map((item)=>
            <Course courses={item} />):"No Courses"
        } */}
        
        <Course courses={courselist}/>
      
        
        {/* <Course courses={{title:"Java Course",description:"This is a java courses"}}/> */}
    </div>
  )
}

export default AllCourses