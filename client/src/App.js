import React from 'react'
<<<<<<< HEAD
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import video from '/Users/cecilianunn/development/Project-3/SEI-Project-3/client/src/styles/pexels-rodnae-productions-7502873.mp4'
import Logo from '/Users/cecilianunn/development/Project-3/SEI-Project-3/client/src/styles/Logo.png'
=======
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ShowActivities from './components/ShowActivities.js'


>>>>>>> development
// function App() {
//   React.useEffect(() => {
//     const getData = async () => {
//       const res = await fetch('/api/activities') // * <-- replace with your endpoint
//       const data = await res.json()
//       console.log(data)
//     }
//     getData()
//   })

// function App() {
//   React.useEffect(() => {
//     const getData = async () => {
//       const res = await fetch('/api/groups') // * <-- replace with your endpoint
//       const data = await res.json()
//       console.log(data)
//     }
//     getData()
//   })
const App = () => {
  return (
<<<<<<< HEAD
    // Navbar area 
    <>
      <Navbar className="navbar-colour" Navbar bg="" variant="dark">
        <div className="logo-nav-items">
          <div className="logo">
            <Navbar.Brand href="#home"><img src={Logo} /></Navbar.Brand>
          </div>
          <div className="navbar-items">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#activities">Activities</Nav.Link>
              <Nav.Link href="#Login">Login</Nav.Link>
              <Nav.Link href="#register">Register</Nav.Link>
            </Nav>
          </div>
        </div>
      </Navbar>
      <Jumbotron>
        <video className='videoTag' autoPlay loop muted>
          <source src={video} type='video/mp4' />
        </video>
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
=======
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path ="/activities">
          <ShowActivities />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
       
      </Switch>
    </BrowserRouter>
  )
}

>>>>>>> development
export default App