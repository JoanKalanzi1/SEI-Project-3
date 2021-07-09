import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'
// import Image from 'react-bootstrap/Image'

const GroupCard = ({ _id, name, image }) => {

  return (
    <Nav.Item >
      <Col class='indexShow' xs={12} style={{
        minHeight: '300px',
        backgroundImage: `url("${image}.jpeg")`,
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5px',
      }}>
        <span id='cardName'><Nav.Link href={`http://localhost:3000/groups/${_id}`}>{name}</Nav.Link></span>
      </Col>
    </Nav.Item>
  )
}


export default GroupCard