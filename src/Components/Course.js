import React from 'react'
import axios from 'axios';
import {
    Card,
    CardBody,
    Button,
    Container,
    CardText,
    CardSubtitle,
    CardFooter,
    CardTitle
    
} from 'reactstrap'
import base_url from '../API/ServiceAPi';
import { toast } from 'react-toastify';

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
                        <Button color='warning m-2'>Update</Button>
                        <Button onClick={()=>deleteItem(courses.id)} color='danger m-2'>Delete</Button>
                    </Container>
            </CardBody>
        </Card>
    </div>
  )
}

export default Course