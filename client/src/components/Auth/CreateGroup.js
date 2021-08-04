import React, { useState } from 'react'
import axios from 'axios'
import { Form, Button, Container } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'


const CreateGroup = () => {

  const history = useHistory()
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    activity: [''],
    location: '',
    longitude: '',
    latitude: '',
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
    location: '',
    longitude: '',
    latitude: '',
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
      history.push('/')
    } catch (err) {
      console.log('err.response.data', err.response.data)
      setError(err.response.data)
    }
    setFormData()
  }
  console.log(errors)

  return (
    <Container fluid="sm" className="login">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formData.name}
            name="name"
            placeholder="Enter name of the group" />
          <Form.Text className="text-muted">
            {/* We'll never share your email with anyone else. */}
          </Form.Text>
        </Form.Group>
        {errors.name && <p className="help is-danger">{errors.name}</p>}

        <Form.Group className="mb-3" controlId="formBasicActivity">
          <Form.Label>Activity</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formData.activity}
            name="activity"
            placeholder="Enter name of the activity" />
          <Form.Text className="text-muted">
            {/* We'll never share your email with anyone else. */}
          </Form.Text>
        </Form.Group>
        {errors.activity && <p className="help is-danger">{errors.activity}</p>}

        <Form.Group className="mb-3" controlId="formBasicLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formData.location}
            name="location"
            placeholder="Enter the location" />
        </Form.Group>
        {errors.location && <p className="help is-danger">{errors.location}</p>}

        <Form.Group className="mb-3" controlId="formBasicTime">
          <Form.Label>Time</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formData.time}
            name="time"
            placeholder="Such as 19:00" />
        </Form.Group>
        {errors.time && <p className="help is-danger">{errors.time}</p>}

        <Form.Group className="mb-3" controlId="formBasicLongitude">
          <Form.Label>Longitude:</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formData.longitude}
            name="longitude"
            placeholder="-0.192392" />
        </Form.Group>
        {errors.longitude && <p className="help is-danger">{errors.longitude}</p>}
        <Form.Group className="mb-3" controlId="formBasicLatitude">
          <Form.Label>Latitude</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formData.latitude}
            name="latitude"
            placeholder="51.549382" />
        </Form.Group>
        {errors.latitude && <p className="help is-danger">{errors.latitude}</p>}
    
        <Form.Group className="mb-3" controlId="formBasicContact">
          <Form.Label>Contact</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formData.contact}
            name="contact"
            placeholder="079567893670" />
        </Form.Group>
        {errors.contact && <p className="help is-danger">{errors.contact}</p>}
        <Form.Group className="mb-3" controlId="formBasicLevel">
          <Form.Label>Level</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formData.level}
            name="level"
            placeholder=" Such as Beginner" />
        </Form.Group>


        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Now describe what your group will be about</Form.Label>
          <Form.Control as="textarea" rows={3}
            onChange={handleChange}
            value={formData.about}
            name="about"
          />
        </Form.Group>
        {errors.about && <p className="help is-danger">{errors.about}</p>}
        <Form>
          <Form.Group>
            <Form.File id="exampleFormControlFile1"
              onChange={handleChange}
              value={formData.image}
              name="image"
              label="Example file input" />
          </Form.Group>
        </Form>
        {errors.image && <p className="help is-danger">{errors.image}</p>}

        <Button variant="primary" type="submit">Submit</Button>
      </Form>





    </Container >
  )



}
export default CreateGroup

