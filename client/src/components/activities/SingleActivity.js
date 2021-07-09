import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Image } from 'react-bootstrap'
import GroupCard from '../groups/GroupCard'

const SingleActivity = () => {
  const [activity, setActivity] = useState(null)
  const [activityName, setActivityName] = useState('')
  const [allGroups, setAllGroups] = useState(null)
  const [activityGroups, setActivityGroups] = useState(null)
  const [hasError, setHasError] = useState(false)
  const { id } = useParams()

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
  }, [id])

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
      setActivityGroups(filteredGroup)
    }
    if (allGroups) getGroupsWithActivity()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allGroups])

  console.log('DATA', activity)
  console.log('groups', allGroups)
  console.log('groupActivities', activityGroups)
  return (
    <section>
      {activity ?
        <div className="groupSet">
          {/* TITLE DIV */}
          <div>
            <h2 className="singleActivityText">{activity.nameOfActivity}</h2>
          </div>
          {/* IMAGE AND SUMMARY DIV */}
          <div id='activity"Container'>
            <div className="centerImage">
              <Image src={`${activity.image}.jpeg`} alt={activity.nameOfActivity} className="imageContainer" />
            </div>

            <div className="summary" >{activity.summary}</div>

          </div>
        </div>
        :
        <h2>
          {hasError ? 'Something has gone wrong!' : 'loading... activity'}
        </h2>
      }


      <div className="centerGroupsHeader">
        <div className="summaryGroups">
          <h3>Groups where you can do this activity:</h3>
        </div>

        {activityGroups ?
          <div className="otheractivities">
            {activityGroups.map(group => {
              return <GroupCard key={group._id} {...group} />
            })}
          </div>
          :
          <h2>
            {hasError ? 'Something has gone wrong!' : 'loading...group activities'}
          </h2>
        }
      </div>
    </section >
  )
}

export default SingleActivity
