import React, { useState } from 'react'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'


const Login = () => {

  const history = useHistory()

  const [userLogInData, setUserLogInData] = useState({
    email: '',
    password: '',
  })
  const [ errors, hasErrors ] = useState({
    email: '',
    password: '',
  })


  const handleChange = (event) => {
    const userData = { ...userLogInData, [event.target.name]: event.target.value }
    setUserLogInData(userData)

  }
  const setTokenToLocalStorage = (token) => {
    window.localStorage.getItem('token', token)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { data } = await axios.post('/api/login', userLogInData)
      
      setTokenToLocalStorage(data.token)
      history.push('/api/activities')

    } catch (err) {
      hasErrors(err.response.data.errors)
    }

  }
  return (
    
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          onChange={handleChange}
          type="email"
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
          type="password"
          name="password"
          placeholder="Enter password" />
        <Form.Text className="text-muted">
          {/* We'll never share your email with anyone else. */}
        </Form.Text>
      </Form.Group>
      {errors.password && <p className="help is-danger">{errors.password}</p>}

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  )
}

export default Login