import React from 'react'
<<<<<<< HEAD
import Button from 'react-bootstrap/Button'
=======
>>>>>>> development
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ShowActivities from './components/ShowActivities.js'


const App = () => {
  return (
<<<<<<< HEAD
    // Navbar area 
    <>
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
=======
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/activities">
          <ShowActivities />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
>>>>>>> development

      </Switch>
    </BrowserRouter>
  )


}



export default App