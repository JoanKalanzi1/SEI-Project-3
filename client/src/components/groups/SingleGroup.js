import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ActivityCard from '../activities/ActivityCard'
import Image from 'react-bootstrap/Image'

const SingleGroup = () => {
  const [group, setGroup] = useState(null) // linked to first getData i.e. individual group
  const [location, setLocation] = useState([]) // also linked to first getData, i.e location.
  const [groupActivityData, setGroupActivityData] = useState([]) // also linked to first getData i.e. mtb biking, cooking
  const [num, setNum] = useState([]) // also linked to first getData, i.e, 1.
  const [activities, setActivities] = useState(null) // is all activities
  const [groupActivities, setGroupActivities] = useState(null) //group activity data
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
        setNum(data.activity.length)
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
    const getActivityData = async () => {
      try {
        const { data } = await axios.get('/api/activities')
        setActivities(data)
      } catch (err) {
        setHasError(true)
        console.log('ERROR WHILE GETTING ACTIVITY DATA', err)
      }
    }
    if (group) getActivityData()
    console.log('getACTIVITYDATA RUNNING')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [group])


  useEffect(() => {
    const getGroupActivities = () => {
      const mapForFilter = groupActivityData.map(item => {
        console.log('item', item)
        const filteredArray = activities.filter(activity => activity.nameOfActivity === item)
        console.log(filteredArray)
        activitiesArray.push(filteredArray[0])
      })
      setGroupActivities(activitiesArray)
      console.log('ACTIVITIES ARRAY', activitiesArray)
      console.log('map', mapForFilter)
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
  console.log('num', num)



  return (
    <section>
      <div>
        {group ?
          <div className='groupSet'>
            <h2>{group.name}</h2>
            <h4>Located in: {location}</h4>
            <div>
              <Image src={`${group.image}.jpeg`} alt={group.name} className='imageContainer' />
            </div>
          
            <h3>{group.about}</h3>
            <h3>{group.time}</h3>
            <h3>{group.contact}</h3>
          </div>
          :
          <h2>
            {hasError ? 'Something has gone wrong!' : 'loading...group'}
          </h2>
        }
      </div>
      <div>
        Actvities you can take part in, in this group:
        {groupActivities ?
          <div>
            {groupActivities.map(activity => {
              return <ActivityCard key={activity._id} {...activity} />
            })}
          </div>
          :
          <h2>
            {hasError ? 'Something has gone wrong!' : 'loading...group activities'}
          </h2>
        }
      </div>

    </section>
  )
}
export default SingleGroup