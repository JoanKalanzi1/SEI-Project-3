import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const SingleGroup = () => {
  const [group, setGroup] = useState([])
  const [hasError, setHasError] = useState(false)
  const { id } = useParams()

  useEffect( () => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`/api/groups/${id}`)
        setGroup(data)
        console.log('GROUP', group)
      } catch (err) {
        setHasError(true)
        console.log('ERROR WHILE GETTING GROUP DATA', err)
      }
    }
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
<<<<<<< HEAD
  },[id])
=======
<<<<<<< HEAD
  }, [id])
=======
  },[id])
>>>>>>> 8f326a39016bce474535f90c5cb27f3cd5a4ed31
>>>>>>> development

  console.log('DATA', group)
  return (
    <div>
      {group ?
        <div>
          <h2>{group.name}</h2>
          <hr />
          <div>
            <div>
              <figure>
                <img src={group.image} alt={group.name} />
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
export default SingleGroup