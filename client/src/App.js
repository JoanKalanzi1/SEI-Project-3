import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ShowActivities from './components/ShowActivities.js'


const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
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