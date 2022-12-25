import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Course from './Course'
import base_url from '../API/ServiceAPi';
import { toast } from 'react-toastify';

function AllCourses() {
  const [courses,setCourses]=useState([{}])

  const getAllCourses=()=>{
    axios.get(`${base_url}/courses`).then(
      (response)=>{
        toast.success("Courses has been loaded")
        setCourses(response.data)
        // console.log(response);

      },
      (error)=>{
        toast.error("Error")
        console.log(error);
      }

    )
  }

    useEffect(()=>{
      document.title="All Courses"
      console.log("Fired once");
      getAllCourses()
    },[])
    
    const updateCourse=(id)=>{
      setCourses(courses.filter((c)=>c.id!==id))
  }
    const courselist=courses.map((item)=> <Course key={item.id} courses={item} update={updateCourse}/>)

  return (
    <div>
        <h1>All Courses</h1>
        {
          courses.length>0?courselist:"No courses"
        }
    </div>
  )
}

export default AllCourses