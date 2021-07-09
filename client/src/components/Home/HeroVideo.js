import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'




const HeroVideo = () => {
  return (
    <Jumbotron>

      <div className='hero-video-and-text'>
        <video className='videoTag'
          autoPlay loop muted
          style={{
            position: 'relative',
            width: '100%',
          }}>
          <source src="https://i.imgur.com/PXNKqMo.mp4" type="video/mp4" />
        </video>
        <div className='text-on-hero'>
          <h1>Jump into something new</h1>
          <p>
            Couped up inside for too long? Us too!
            <br></br>
            Let us find you a new hobby and local group to join
          </p>
          <p>
            <div className="button">
              <Link to='/generator'>
                <Button variant="dark" size="lg" className="button-home" href="/generator">Get me out!</Button>
              </Link>
            </div>
          </p>
        </div >
      </div>
    </Jumbotron >
  )
}

export default HeroVideo
