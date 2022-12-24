import React, { Fragment, useState } from 'react'
import { AxiosContext } from 'react-axios/lib/components/AxiosProvider';
import axios from 'axios';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'
import base_url from '../API/ServiceAPi';
import { toast } from 'react-toastify';

function AddCourses() {
  
  const [formData,setformData]=useState()

  const formHandler=(e)=>{
    // console.log(formData);
    addCoursestoServer(formData)
    e.preventDefault()
  }

  const addCoursestoServer=(data)=>{
    axios.post(`${base_url}/courses`,data).then(
      (response)=>{
        console.log(response.data);
        toast.success("Successfully Added")
      },(error)=>{
        toast.error(error)
      }

    )
  }
  return (

    <div>
        
          <h3 className='my-3'>Fill Course Detail</h3>
          <Form onSubmit={formHandler}>
                  <FormGroup>
                      <Label for='courseId'>Courses ID</Label>
                      <Input onChange={(e)=>setformData({...formData,id:e.target.value})} placeholder='Enter Course ID' type='text' id='courseId' name='courseId'></Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for='coursetitle'>Title</Label>
                    <Input onChange={(e)=>setformData({...formData,title:e.target.value})} placeholder='Enter title' type='text' id='coursetitle' name='coursetitle'></Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for='courseDesc'>Description</Label>
                    <Input onChange={(e)=>setformData({...formData,description:e.target.value})} placeholder='Enter Description' type='textarea' id='courseDesc' name='courseDesc'></Input>
                  </FormGroup>
                  <Container>
                    <Button type='submit' className='mr-2' color='success'>Add Course</Button>
                    <Button type='reset' color='warning m-2'>Clear</Button>
                  </Container>
          </Form>
    </div>
  )
}

export default AddCourses