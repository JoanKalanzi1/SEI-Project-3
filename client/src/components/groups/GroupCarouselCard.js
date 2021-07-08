import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Col from 'react-bootstrap/Col'
// import Image from 'react-bootstrap/Image'

const GroupCarouselCard = ({ _id, name, image }) => {

  return (
    <Nav.Item >
      <Col class='indexShow' xs={12} rounded style={{
        minHeight: '300px',
        backgroundImage: `url("${image}.jpeg")`,
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5px',
      }}>
        <span id='carouselCardName'><Nav.Link href={`groups/${_id}`}>{name}</Nav.Link></span>
      </Col>
    </Nav.Item>
  )
}


export default GroupCarouselCard