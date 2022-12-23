import React, { Fragment } from 'react'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'

function AddCourses() {
  return (
    <div>
        
          <h3 className='my-3'>Fill Course Detail</h3>
          <Form>
                  <FormGroup>
                      <Label for='courseId'>Courses</Label>
                      <Input placeholder='Enter Course' type='text' id='courseId' name='courseId'></Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for='coursetitle'>Title</Label>
                    <Input placeholder='Enter title' type='text' id='coursetitle' name='coursetitle'></Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for='courseDesc'>Description</Label>
                    <Input placeholder='Enter Description' type='textarea' id='courseDesc' name='courseDesc'></Input>
                  </FormGroup>
                  <Container>
                    <Button className='mr-2' color='success'>Add Course</Button>
                    <Button color='warning m-2'>Clear</Button>
                  </Container>
          </Form>
        
        
    </div>
  )
}

export default AddCourses