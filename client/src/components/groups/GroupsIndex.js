import React, { useState, useEffect } from 'react'
import axios from 'axios'
import GroupCard from './GroupCard' 


const GroupsIndex  = () => {
  const [groups, setGroups] = useState([])
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/groups')
        console.log('GROUPS', data)
        setGroups(data)
        
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
        {groups.length > 0 ?
          <div className="columns is-multiline">
            {groups.map(group => {
              return <GroupCard key={group._id} {...group} />
            })}
          </div>
          :
          <h2>
            {hasError ? 'Something has gone wrong!' : 'loading....groups'}
          </h2>
        }
      </div>
    </section>
  )
}

export default GroupsIndex