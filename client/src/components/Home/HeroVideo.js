import React from 'react'
import { ImageBackground, Text } from 'react-native'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'


const HeroVideo = () => {
  return (
    <Jumbotron>
      <ImageBackground source src="https://i.imgur.com/PXNKqMo.mp4" type="video/mp4" resizeMode="cover">
        <video className='videoTag'
          autoPlay loop muted
          style={{
            vw: '100%',
          }}>
        </video>
        <Text>
          <h1>Jump into something new</h1>
          <p>
            Couped up inside for too long? Us too!
            Let us find you a new hobby and local group to join
          </p>
          <p>
            <div>
              <Link to='/generator'>
                <Button variant="primary center" href="/generator">Get me out!</Button>
              </Link>
            </div>
          </p>
        </Text>
      </ImageBackground>
    </Jumbotron >
  )
}

export default HeroVideo
