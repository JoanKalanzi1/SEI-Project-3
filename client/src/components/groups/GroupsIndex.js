import React, { useState, useEffect } from 'react'
import axios from 'axios'
import GroupCard from './GroupCard'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'



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
    <section>
      <Container fluid>
        {groups.length > 0 ?
          <Row xs="6" sm="3">
            {groups.map(group => {
              return <GroupCard key={group._id} {...group} />
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

export default GroupsIndex