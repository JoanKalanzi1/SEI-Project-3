import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import axios from 'axios'
// import { useHistory } from 'react-router-dom'



const GroupRegister = () => {

  // const history = useHistory()

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })
  const [errors, setError] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const handleChange = (event) => {
    const registerFormData = { ...formData, [event.target.name]: event.target.value }
    console.log('state', formData)
    setFormData(registerFormData)
    // console.log('setFormData', setFormData)
  }
  const handleSubmit = async (event) => {

    event.preventDefault()
    console.log('submitted')
    try {
      await axios.post('/api/groupRegister', formData)
      // console.log(formData)
      history.push('/grouplogin')
    } catch (err) {
      console.log('err.response.data', err.response.data)
      setError(err.response.data)
    }
    setFormData()
  }
  return (
    <Container fluid="sm" className="login">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formData.username}
            name="username"
            placeholder="Enter username" />
          <Form.Text className="text-muted">
            {/* We'll never share your email with anyone else. */}
          </Form.Text>
        </Form.Group>
        {errors.username && <p className="help is-danger">{errors.username}</p>}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formData.email}
            name="email"
            placeholder="Enter email" />
          <Form.Text className="text-muted">
            {/* We'll never share your email with anyone else. */}
          </Form.Text>
        </Form.Group>
        {errors.email && <p className="help is-danger">{errors.email}</p>}

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formData.password}
            type="password"
            name="password"
            placeholder="Password" />
        </Form.Group>
        {errors.password && <p className="help is-danger">{errors.password}</p>}

        <Form.Group className="mb-3" controlId="formBasicPasswordConfirmation">
          <Form.Label>passwordConfirmation</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={formData.passwordConfirmation}
            type="password"
            name="passwordConfirmation"
            placeholder="PasswordConfirmation" />
        </Form.Group>
        {errors.passwordConfirmation && <p className="help is-danger">{errors.passwordConfirmation}</p>}

        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </Container >
  )




}

export default GroupRegister