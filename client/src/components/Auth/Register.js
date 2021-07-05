import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { Form, Button } from 'react-bootstrap'


const Register = () => {

  const history = useHistory()
  const [Error, hasError] = useState({

    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })
  const [formData, setFormDate] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  }
  )

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post('/api/register', formData)
      history.push('/api/login')
    } catch (err) {
      hasError(err.response.data.errors)
    }
    setFormDate()
  }


  return (

    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          onChange={handleChange}
          type="username"
          placeholder="Enter username"
          value={formData.username}
          name="username"
        />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="Email"
          placeholder="Enter email"
          onChange={handleChange}
          type="username"
          placeholder="Enter username"
          value={formData.username}
          name="username"
        />
        <Form.Text className="text-muted">
          Type Email here.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPasswordConfirmation">
        <Form.Label>passwordConfirmation</Form.Label>
        <Form.Control type="password" placeholder="PasswordConfirmation" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )


}
export default Register