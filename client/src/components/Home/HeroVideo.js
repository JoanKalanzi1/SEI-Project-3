import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const HeroVideo = () => {
  return (
    <Jumbotron>
      <video className='videoTag' autoPlay loop muted>
        <source src='https://imgur.com/PXNKqMo' type='video/mp4' />
      </video>
      <h1>Jump into something new</h1>
      <p>
        Couped up inside for too long? Us too! Lets get out, find a new hobby and meet great people in London
      </p>
      <p>
        <div>
          <Link to='/generator'>
            <Button variant="primary center" href="/generator">Get me out!</Button>
          </Link>
        </div>
      </p>
    </Jumbotron>
  )
}

export default HeroVideo