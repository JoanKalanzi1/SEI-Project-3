import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const SingleGroup = () => {
  const [group, setGroup] = useState(null) // linked to first getData
  const [location, setLocation] = useState([]) // also linked to first getData
  const [groupActivityData, setGroupActivityData] = useState([]) // also linked to first getData
  const [num, setNum] = useState([null]) // also linked to first getData
  const [activities, setActivities] = useState(null) //
  const [groupActivities, setGroupActivities] = useState(null)
  const [hasError, setHasError] = useState(false)
  const { id } = useParams()
  const activitiesArray = []

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/groups/${id}`)
        setGroup(data)
        setLocation(data.location)
        setGroupActivityData(data.activity)
        
      } catch (err) {
        setHasError(true)
        console.log('ERROR WHILE GETTING GROUP DATA', err)
      }
    }
    getData()
    console.log('getDATA RUNNING')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  useEffect(() => {
    const setInfo = () => {
      setNum(groupActivityData.length)
    }
    setInfo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [group])

  useEffect(() => {
    const getActivityData = async () => {
      try {
        const { data } = await axios.get('/api/activities')
        setActivities(data)
      } catch (err) {
        setHasError(true)
        console.log('ERROR WHILE GETTING ACTIVITY DATA', err)
      }
    }
    if (num) getActivityData()
    console.log('getACTIVITYDATA RUNNING')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num])


  useEffect(() => {
    const getGroupActivities = () => {
      console.log('getGroupActivities RUNNING')
      for (let i = 0; i < num; i++) {
        const activityFound = activities.nameOfActivity.filter(groupActivityData[i])
        console.log('ACTIVITYFOUND', activityFound)
        activitiesArray.push(activityFound)
      }
      setGroupActivities(activitiesArray)
    }
    if (activities) getGroupActivities()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activities])
  if (!groupActivities) return null

  // var bedrooms = myArray.filter(name => name.includes('bedroom'))

  console.log('GROUP', group)
  console.log('GroupActivityData', groupActivityData)
  console.log('activities set!', activities)
  console.log('groupActivities', groupActivities)
  console.log('number set', num)


  return (
    <section>
      {group ?
        <div>
          <h2>{group.name}</h2>
          <h4>{location.name}</h4>
          <h3>{group.about}</h3>


        </div>
        :
        <h2>
          {hasError ? 'Something has gone wrong!' : 'loading...group'}
        </h2>
      }
    </section>
  )
}
export default SingleGroup