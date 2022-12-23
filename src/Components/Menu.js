import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'reactstrap'
import Home from './Home'

function Menu() {
  return (
    <div>
        <Link to={'/home'} action>
            Home
        </Link>
        <ListGroup>
            {/* <ListGroupItem tag='a' href='/' action>
                Home
            </ListGroupItem> */}
            <ListGroupItem tag='a' href='/addCourses' action>
                AddCourses
            </ListGroupItem>
            <ListGroupItem tag='a' href='/viewCourses' action>
                View Courses
            </ListGroupItem>
            <ListGroupItem tag='a' href='#!' action>
                About
            </ListGroupItem>
        </ListGroup>
    </div>
  )
}

export default Menu