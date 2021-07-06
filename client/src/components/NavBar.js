import Logo from '../styles/Logo.png'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import { LinkContainer } from 'react-router-bootstrap'
// import { useParams } from 'react-router-dom'

const NavBar = () => {
  // const [group, setGroup] = useState([])

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const { data } = await axios.get('/api/groups/')
  //       setGroup(data)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   getData()
  // }, [])
  // console.log('data', getData)


  return (
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
              <Nav.Link href="#login">Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/Register'>
              <Nav.Link href="#register">Register</Nav.Link>
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