import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ShowActivities from './components/ShowActivities.js'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/activities">
          <ShowActivities />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>

      </Switch>
    </BrowserRouter>
  )


}



export default App