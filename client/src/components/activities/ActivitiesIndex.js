import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ActivityCard from './ActivityCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


const ActivitiesIndex = () => {
  const [activities, setActivities] = useState([])
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/activities')
        console.log('GROUPS', data)
        setActivities(data)

      } catch (err) {
        setHasError(true)
        console.log('ERROR WHILE GETTING GROUP DATA', err)
      }
    }
    getData()
  }, [])

  return (
    <section>
      
      <Container fluid>
        {activities.length > 0 ?
          <Row xs="6" sm="3">
            {activities.map(activity => {
              return <ActivityCard key={activity._id} {...activity} />
            })}
          </Row>
          :
          <h2>
            {hasError ? 'Something has gone wrong!' : 'loading....groups'}
          </h2>
        }
      </Container>
    </section>
  )
}


export default ActivitiesIndex