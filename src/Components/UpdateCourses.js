import React, {useState } from 'react'
import axios from 'axios';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'
import base_url from '../API/ServiceAPi';
import { toast } from 'react-toastify';

function UpdateCourses() {
  
    const [updateData,setupdataData]=useState({})
    
    const UpdateSubmit=(e)=>{
        console.log("working");
        console.log(updateData);
        UpdateCourse(updateData)
        e.preventDefault()
        toast.success("Updated Successfully")
        window.location.href ="/viewCourses"
    }
    const UpdateCourse=(data)=>{
        axios.put(`${base_url}/courses`,data).then(
            (response)=>{
                console.log(response);
                toast.success("Updated Successfully")
            },(error)=>{
                toast.error("Error")
            }
        )
    } 
  return (

    <div>
        
          <h3 className='my-3'>Update Course Detail</h3>
          <Form onSubmit={UpdateSubmit}>
                  <FormGroup>
                      <Label for='courseId'>Courses ID</Label>
                      <Input onChange={(e)=>setupdataData({...updateData,id:e.target.value})} placeholder='Enter Course ID' type='text' id='courseId' name='courseId'></Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for='coursetitle'>Title</Label>
                    <Input onChange={(e)=>setupdataData({...updateData,title:e.target.value})} placeholder='Enter title' type='text' id='coursetitle' name='coursetitle'></Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for='courseDesc'>Description</Label>
                    <Input onChange={(e)=>setupdataData({...updateData,description:e.target.value})} placeholder='Enter Description' type='textarea' id='courseDesc' name='courseDesc'></Input>
                  </FormGroup>
                  <Container>
                    <Button type='submit' className='mr-2' color='success'>Update Course</Button>
                    <Button type='reset' color='warning m-2'>Clear</Button>
                  </Container>
          </Form>
    </div>
  )
}


export default UpdateCourses
