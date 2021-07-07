import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'

const ActivityCard = ({ _id, nameOfActivity, image }) => {


  return (
    <Nav.Item >
      <Col class='indexShow' xs={12} style={{
        minHeight: '300px',
        backgroundImage: `url("${image}.jpeg")`,
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <span id='cardName'><Nav.Link href={`activities/${_id}`}>{nameOfActivity}</Nav.Link></span>
      </Col>
    </Nav.Item>
  )
}


export default ActivityCard