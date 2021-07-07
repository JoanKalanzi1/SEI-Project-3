/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'


const Generator = () => {
  const [answer, setAnswer] = useState('')
  const [activities, setActivities] = useState([])// all groups on state
  const [hasError, setHasError] = useState('')
  const [optionPicked, setOptionPicked] = useState([])

  // make a call to get everything, 
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/activities')
        console.log('activities', data)
        setActivities(data)

      } catch (err) {
        setHasError(err.response)
        console.log('ERROR WHILE GETTING activity', err)
      }
      console.log(activities)
    }
    getData()
  }, [])

  console.log(activities)
  console.log(answer)

  const handleClick = (event) => {
    setAnswer(event.target.value)
    const newArray = activities.filter((item) => {
      console.log('I am an item-->', item)
      console.log('item.physical === event.target.value', item.physical === event.target.value)
      console.log(event.target.value)
      return item.physical === event.target.value
      // get apiece of state that changes from false to true 
      // behind turnary (all different buttons) 
      // has button be clicked true or false - then show next set of buttons 
      // then run it on filtered state 
      // FIRST - only display physical and non button 
      // once clicked then show the next 
      //conditional rendering - 
      // inside handle click - set a piece of state to say has phsycial button be clicked start as flase - then set as true
      // in render do a trunary or piece of state && render tehse buttons (then do same thing for next one) 
      // donut shop - react - showing homepage changing view 
      // random number genrator 
      // {() => handleClose()} to= {location.pathname === '/Login' ? '/Login' : '/Register'}
    })
    setOptionPicked(newArray)
    console.log(newArray)
  }

  console.log(optionPicked)

  // then once that is on state do a filter based on whatever option the user has chosen and then once you have a new array of the filtered items just generate a random number and pick an object from the array using the random number

  // do a filter that checks if the option the user has chosen matches the value on the object

  // the same as when we did the drop down for regions with country flags or the donut shop

  // except the value will be on a button or whatever you are using

  // thats step 1

  // then step 2 would be generate a random number and use that number to get an object out of the array

  // do the filter first and we can look at the other part after



  return (
    <>
      <div className="generator-area">
        <h1>Pick a few options and then we will give you a new hobby and a few local groups you can join. </h1>
        <br></br>
        <h2> I want a new adventure that is ...</h2>
        <div className="Physcial">
          <Button variant="outline-secondary" value="Physical" onClick={handleClick} size="lg">Physical</Button>{' '}
          <Button variant="outline-secondary" value="non-physical" onClick={handleClick} size="lg">Non-physical</Button>{' '}
        </div>
        <div className="Competitive">
          <Button variant="outline-success" value="competitive" onClick={handleClick} size="lg">Competitive</Button>{' '}
          <Button variant="outline-success" value="non-competitive" onClick={handleClick} size="lg">Non-competitive</Button>{' '}
        </div>
        <div className="Creative">
          <Button variant="outline-primary" value="creative" onClick={handleClick} size="lg">Creative</Button>{' '}
          <Button variant="outline-primary" value="non-creative" onClick={handleClick} size="lg">Non-creative</Button>{' '}
          <Button variant="outline-primary" value="sometimes" onClick={handleClick} size="lg">Sometimes</Button>{' '}
        </div>
        <div className="Indoor">
          <Button variant="outline-info" value="indoor" onClick={handleClick} size="lg">Indoor</Button>{' '}
          <Button variant="outline-info" value="outdoor" onClick={handleClick} size="lg">Outdoor</Button>{' '}
        </div>
        <br></br>
        <h2>Not sure? Lets give you something random</h2>
        <div className="Random">
          <Button variant="outline-danger" value="random" onClick={handleClick}>Random</Button>{' '}
        </div>
      </div>
    </>
  )
}
export default Generator