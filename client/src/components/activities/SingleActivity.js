import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Image from 'react-bootstrap/Image'

const SingleActivity = () => {
  const [activity, setActivity] = useState(null)
  const [activityName, setActivityName] = useState('')
  const [allGroups, setAllGroups] = useState(null)
  const [hasError, setHasError] = useState(false)
  const { id } = useParams()
  const groupsArray = []

  useEffect(() => {
    const getActivityData = async () => {
      try {
        const { data } = await axios.get(`/api/activities/${id}`)
        setActivity(data)
        setActivityName(data.nameOfActivity)
        console.log('ACTIVITY', activity)
      } catch (err) {
        setHasError(true)
        console.log('ERROR WHILE GETTING GROUP DATA', err)
      }
    }
    getActivityData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[id])

  useEffect(() => {
    const getGroupData = async () => {
      try {
        const { data } = await axios.get('/api/groups')
        setAllGroups(data)
      } catch (err) {
        setHasError(true)
        console.log('ERROR WHILE GETTING GROUP DATA', err)
      }
    }
    if (activity) getGroupData()
    console.log('getACTIVITYDATA RUNNING')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activity])

  useEffect(() => {
    const getGroupsWithActivity = () => {
      console.log('WORKING')
      const filteredGroup = allGroups.filter(group => group.activity.includes(activityName))
      console.log('filteredGroup>>>', filteredGroup)
    }
    if (allGroups) getGroupsWithActivity()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allGroups])

  // const filteredArray = activities.filter(activity => activity.nameOfActivity === groupActivityData[0])
  // console.log('filter', filteredArray)
  // console.log(groupActivityData)
  // setGroupActivities(activitiesArray)

  console.log('DATA', activity)
  console.log('groups', allGroups)
  return (
    <section>
      {activity ?
        <div>
          <h2>{activity.nameOfActivity}</h2>
          <div id='activityContainer'>
            <div className='imageContainer'>
              <Image src={`${activity.image}.jpeg`} alt={activity.nameOfActivity} />
            </div>
            <div>
              <p>{activity.summary}</p>
            </div>
          </div>
        </div>
        :
        <h2>
          {hasError ? 'Something has gone wrong!' : 'loading... activity'}
        </h2>
      }
    </section>
  )
}

export default SingleActivity