import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
// import ShowActivities from './components/ShowActivities.js'
import SingleGroup from './components/groups/SingleGroup.js'
import SingleActivity from './components/activities/SingleActivity'
import ActivitiesIndex from './components/activities/ActivitiesIndex'
import GroupsIndex from './components/groups/GroupsIndex'



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
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path ='/groups/:id'>
          <SingleGroup />
        </Route>
        <Route path ='/groups'>
          <GroupsIndex />
        </Route>
        <Route path ='/activities/:id'>
          <SingleActivity />
        </Route>
        <Route path ="/activities">
          <ActivitiesIndex />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App