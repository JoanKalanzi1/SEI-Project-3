import React, { useState } from 'react'
import axios from 'axios'
import { Form, Button, Col, Container } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'


const CreateGroup = () => {

  const history = useHistory()
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    activity: [''],
    location: {},
    number: '',
    about: '',
    time: '',
    level: '',
    contact: '',
  })
  const [errors, setError] = useState({
    name: '',
    image: '',
    activity: [''],
    location: {},
    number: '',
    about: '',
    time: '',
    level: '',
    contact: '',
  })



  const handleChange = (event) => {
    const creategroup = { ...formData, [event.target.name]: event.target.value }
    console.log('state', formData)
    setFormData(creategroup)
    // console.log('setFormData', setFormData)
  }
  const handleSubmit = async (event) => {

    event.preventDefault()
    console.log('submitted')
    try {
      await axios.post('/api/groups', formData)
      // console.log(formData)
      history.push('/groups')
    } catch (err) {
      console.log('err.response.data', err.response.data)
      setError(err.response.data)
    }
    setFormData()
  }
  console.log(errors)

  return (
    <Container fluid="sm" className="login">
      <Form onSubmit={handleSubmit} className=''>

        <Form.Row>
          <Col>
            <Form.Control placeholder="Name of group"
              onChange={handleChange}
              value={formData.name}
              name="name" />
          </Col>
          {errors.name && <p className="help is-danger">{errors.name}</p>}
          <Col>
            <Form.Control placeholder="Name of activity"
              onChange={handleChange}
              value={formData.name}
              name="activity" />
          </Col>
        </Form.Row>

        {errors.activity && <p className="help is-danger">{errors.activity}</p>}
        <Form.Row>
          <Col>
            <Form.Control placeholder="Time:"
              onChange={handleChange}
              value={formData.time}
              name="time" />
          </Col>
          {errors.time && <p className="help is-danger">{errors.time}</p>}
          <Col>
            <Form.Control placeholder="Level"
              onChange={handleChange}
              value={formData.level}
              name="level" />
          </Col>
        </Form.Row>
        {errors.level && <p className="help is-danger">{errors.level}</p>}
        <Form.Row >
          <Col>
            <Form.Control placeholder="Location"
              onChange={handleChange}
              value={formData.location}
              name="location" />
            
          </Col>
          {errors.location && <p className="help is-danger">{errors.location}</p>}
       
          <Col>
            <Form.Control placeholder="Contact"
              onChange={handleChange}
              value={formData.contact}
              name="contact" />
          </Col>

        </Form.Row>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Now describe what your group will be about</Form.Label>
          <Form.Control as="textarea" rows={3}
            onChange={handleChange}
            value={formData.about}
            name="about" />
        </Form.Group>
        {/* {errors.about && <p className="help is-danger">{errors.about}</p>} */}
        <Form>
          <Form.Group>
            <Form.File id="exampleFormControlFile1" label="Example file input" />
          </Form.Group>
        </Form>

        <Button variant="primary" type="submit">Submit</Button>


      </Form>
    </Container >
  )



}
export default CreateGroup

