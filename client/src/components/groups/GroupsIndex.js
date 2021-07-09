import React, { useState, useEffect } from 'react'
import axios from 'axios'
import GroupCard from './GroupCard'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'




const GroupsIndex = () => {
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
    <>
      <div className="groupTopper">
        <div className="summaryGroupsA">Take your next step with GetOut</div>
        <div className="summaryGroupsB">If you do not see a group you like, start a group to find the people you’re looking for</div>
        <div className="summaryGroupsC">
          <Link to="/creategroups" variant="primary">Start a group</Link></div>
      </div>
      <section>
        <Container fluid>
          <>
            {groups.length > 0 ?
              <Row xs="1" sm="2" md="3">
                {groups.map(group => {
                  return <GroupCard key={group._id} {...group} />
                })}
              </Row>
              :
              <h2>
                {hasError ? 'Something has gone wrong!' : 'loading....groups'}
              </h2>
            }
          </>
        </Container>
      </section>
    </>
  )
}

export default GroupsIndex