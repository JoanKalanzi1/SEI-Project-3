import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import AuthPage from './components/Register.js'
import ShowActivities from './components/ShowActivities.js'
import UserRegister from './components/Auth/Register.js'
import UserLogin from './components/Auth/Login.js'


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/authorization">
          <AuthPage />
        </Route>
        <Route path="/login">
          <UserLogin />
        </Route>
        <Route path="/register">
          <UserRegister />
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