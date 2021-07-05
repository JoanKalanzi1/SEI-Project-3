import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'



const Home = () => {
  return (
    <>
      <Jumbotron>
        <video className='videoTag' autoPlay loop muted>
          <source src='https://imgur.com/PXNKqMo' type='video/mp4' />
        </video>
        <h1>Hello, world!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary center">Learn more</Button>
        </p>
      </Jumbotron>
      <div className="Activity-carousel">
        <h2> Activity Carousel </h2>
      </div>
      <div className="Map">
        <h2> Map </h2>
      </div>
      <div className="Group-carousel">
        <h2> Group Carousel </h2>
      </div>
      <div className="Footer">
        <h2> Footer </h2>
      </div>

      <div>
      </div>
    </>
  )
}

export default Home