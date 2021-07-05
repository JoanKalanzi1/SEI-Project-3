import React from 'react'
import Nav from 'react-bootstrap/Nav'

const GroupCard = ({ _id, name }) => {

  return (
    <div>
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href={`api/groups/${_id}`}>{name}</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default GroupCard