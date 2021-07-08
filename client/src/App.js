import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/Home/NavBar'
import Home from './components/Home/Home'
import SingleGroup from './components/groups/SingleGroup.js'
import SingleActivity from './components/activities/SingleActivity'
import ActivitiesIndex from './components/activities/ActivitiesIndex'
import GroupsIndex from './components/groups/GroupsIndex'
import UserRegister from './components/Auth/UserRegister.js'
import UserLogin from './components/Auth/UserLogin.js'
import GroupRegister from './components/Auth/GroupRegister'
import GroupLogin from './components/Auth/GroupLogin'
import Generator from './components/Generator'
import CreateGroup from './components/Auth/CreateGroup'



const App = () => {

  return (

    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/groups/:id'>
          <SingleGroup />
        </Route>
        <Route path='/groups'>
          <GroupsIndex />
        </Route>
        <Route path='/activities/:id'>
          <SingleActivity />
        </Route>
        <Route path="/activities">
          <ActivitiesIndex />
        </Route>
        <Route path="/login">
          <UserLogin />
        </Route>
        <Route path="/register">
          <UserRegister />
        </Route>
        <Route path="/groupregister">
          <GroupRegister />
        </Route>
        <Route path="/grouplogin">
          <GroupLogin />
        </Route>
        <Route path="/login">
          <UserLogin />
        </Route>
        <Route path="/creategroups">
          <CreateGroup />
        </Route>
        <Route path="/generator">
          <Generator />
        </Route>
        <Route path="/register">
          <UserRegister />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>

  )
}




export default App