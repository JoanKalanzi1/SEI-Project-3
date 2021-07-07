<<<<<<< HEAD:client/src/components/NavBar.js
// import Logo from '../styles/Logo.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'

=======
import Image from 'react-bootstrap/Image'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
>>>>>>> development:client/src/components/Home/NavBar.js
import { LinkContainer } from 'react-router-bootstrap'
// import { useParams } from 'react-router-dom'
const NavBar = () => {

  return (
    <Navbar className="navbar-colour" Navbar bg="" variant="dark">
      <div className="logo-nav-items">
        <div className="logo">
          <Navbar.Brand href="#home"><Image src="https://imgur.com/0C9foJS.jpeg" /></Navbar.Brand>
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
              <Nav.Link href="#login">Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/Register'>
              <Nav.Link href="#register">Register</Nav.Link>
            </LinkContainer>
          </Nav>
        </div>
      </div>
    </Navbar>
  )
}
export default NavBar