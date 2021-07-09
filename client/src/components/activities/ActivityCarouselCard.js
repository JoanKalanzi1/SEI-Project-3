import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'

const ActivityCarouselCard = ({ _id, nameOfActivity, image }) => {


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
        <span id='cardName'><Nav.Link href={`activities/${_id}`}>{nameOfActivity}</Nav.Link></span>
      </Col>
    </Nav.Item>
  )
}


export default ActivityCarouselCard