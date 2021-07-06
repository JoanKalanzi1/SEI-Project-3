import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const SingleActivity  = () => {
  const [activity, setActivity] = useState([])
  const [hasError, setHasError] = useState(false)
  const { id } = useParams()

  useEffect( () => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/activities/${id}`)
        setActivity(data)
        console.log('ACTIVITY', activity)
      } catch (err) {
        setHasError(true)
        console.log('ERROR WHILE GETTING GROUP DATA', err)
      }
    }
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id])

  console.log('DATA', activity)
  return (
    <div>
      {activity ?
        <div>
          <h2>{activity.nameOfActivity}</h2>
          <hr />
          <div>
            <div>
              <figure>
                <img src={activity.image} alt={activity.nameOfActivity} />
              </figure>
              <hr /> 
            </div>
          </div>
        </div>
        :
        <h2>
          {hasError ? 'Something has gone wrong!' : 'loading...group'}
        </h2>
      }
    </div> 
  )
}

export default SingleActivity