import Logo from '../styles/Logo.png'
import Navbar from 'react-bootstrap/Navbar'
import { Nav, Button, Modal } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'


const NavBar = () => {
  const history = useHistory()

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleUser = () => {
    history.push('/Register')
    handleClose()
  }
  const handleGroup = () => {
    window.location.pathname === '/home' ?
      history.push('/grouplogin') :
      history.push('/groupregister')
     

    handleClose()
  }

  // { window.location.pathname === '/Login' ? 'Login Now' : 'Register Now' }
  return (
    <>
      <Navbar className="navbar-colour" Navbar bg="" variant="dark">
        <div className="logo-nav-items">
          <div className="logo">
            <Navbar.Brand href="#home"><img src={Logo} /></Navbar.Brand>
          </div>
          <div className="navbar-items">
            <Nav className="mr-auto">
              <LinkContainer to='/'>
                <Nav.Link href="#home">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/activities'>
                <Nav.Link href="#activities">Activities</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/groups'>
                <Nav.Link href="#groups">Groups</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/Login'>
                <Nav.Link href="#login" onClick={handleShow}>Login</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/home' variant="primary" onClick={handleShow}>
                <Nav.Link href="#register">Register</Nav.Link>
              </LinkContainer>
            </Nav>
          </div>
        </div>
      </Navbar>
      <section>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{window.location.pathname === '/Login' ? 'Login Now' : 'Register Now'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>Select from the options below</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleUser}>User</Button>
            <Button variant="primary" onClick={handleGroup}>Group</Button>
          </Modal.Footer>
        </Modal>
      </section>
    </>
  )
}
export default NavBar