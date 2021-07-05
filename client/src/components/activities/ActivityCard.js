import React from 'react'
import Nav from 'react-bootstrap/Nav'


const ActivityCard = ({ _id, nameOfActivity }) => {

  return (
    <div>
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href={`api/activities/${_id}`}>{nameOfActivity}</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default ActivityCard