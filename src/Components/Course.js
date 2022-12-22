import React from 'react'
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

function Course({courses}) {
    
  return (
    <div>
        <Card>
            <CardBody>
                <CardSubtitle tag="h5">{courses.title} </CardSubtitle>
                <CardText>{courses.description}</CardText>
                    <Container className='text-center'>
                        <Button color='warning m-2'>Update</Button>
                        <Button color='danger m-2'>Delete</Button>
                    </Container>
            </CardBody>
        </Card>
    </div>
  )
}

export default Course