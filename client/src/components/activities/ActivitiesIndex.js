import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ActivityCard from './ActivityCard'



const ActivitiesIndex  = () => {
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
      <div className="container">
        {activities.length > 0 ?
          <div className="columns is-multiline">
            {activities.map(activity => {
              return <ActivityCard key={activity._id} {...activity} />
            })}
          </div>
          :
          <h2>
            {hasError ? 'Something has gone wrong!' : 'loading....activities'}
          </h2>
        }
      </div>
    </section>
  )
}

export default ActivitiesIndex