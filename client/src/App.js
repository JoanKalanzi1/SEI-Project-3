import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ShowActivities from './components/ShowActivities.js'
import ActivityIndex from './components/ActivityIndex'
import ActivityShow from './components/ActivityShow'




// function App() {
//   React.useEffect(() => {
//     const getData = async () => {
//       const res = await fetch('/api/activities') // * <-- replace with your endpoint
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
        <Route path ="/activities">
          <ShowActivities />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path='/activities/:id' component={ActivityShow} />
        <Route path='/activities' component={ActivityIndex} />
      </Switch>
      
    </BrowserRouter>
  )
}

export default App