import React from 'react'
import axios from 'axios';
import {
    Card,
    CardBody,
    Button,
    Container,
    CardText,
    CardSubtitle,
} from 'reactstrap'
import base_url from '../API/ServiceAPi';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

function Course({courses,update}) {

    const deleteItem=(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                toast.success("Deleted")
                update(id)
            },(error)=>{
                toast.error("Error")
            }

        )
    }

    
  return (
    <div>
        <Card>
            <CardBody>
                <CardSubtitle tag="h5">{courses.title} </CardSubtitle>
                <CardText>{courses.id}</CardText>
                <CardText>{courses.description}</CardText>
                    <Container className='text-center'>
                        <Link to='/updateCourses'>
                            <Button color='warning m-2' a>Update</Button>
                        </Link>
                        
                        <Button onClick={()=>deleteItem(courses.id)} color='danger m-2'>Delete</Button>
                    </Container>
            </CardBody>
        </Card>
    </div>
  )
}

export default Course