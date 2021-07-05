import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import FormControl from 'react-bootstrap/FormControl'
import 'bootstrap/dist/css/bootstrap.min.css'
import Jumbotron from 'react-bootstrap/Jumbotron'


// function App() {
//   React.useEffect(() => {
//     const getData = async () => {
//       const res = await fetch('/api/endpoint') // * <-- replace with your endpoint
//       const data = await res.json()
//       console.log(data)
//     }
//     getData()
//   })

const App = () => {
  return (
    // Navbar area 
    <>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#activities">Activities</Nav.Link>
          <Nav.Link href="#groups">Groups</Nav.Link>
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      <br />
      <Jumbotron>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary center">Learn more</Button>
        </p>
      </Jumbotron>
      <div className="Activity-carousel"> 
        <h2> Activity Carousel </h2>
      </div>
      <div className="Map"> 
        <h2> Map </h2>
      </div>
      <div className="Group-carousel"> 
        <h2> Group Carousel </h2>
      </div>
      <div className="Footer"> 
        <h2> Footer </h2>
      </div>

      <div>
      </div>
    </>
  )
}

export default App
