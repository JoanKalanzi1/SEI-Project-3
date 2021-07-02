import GroupUser from '../models/groupUser.js'
import jwt from 'jsonwebtoken'
import { secret } from '../config/environment.js'

// Register for an account
export const registerGroupUser = async (req, res) => {
  try {
    const newGroupUser = await GroupUser.create(req.body)
    console.log('I am a new user', newGroupUser)
    return res.status(202).json({ message: `Welcome ${newGroupUser.username}` })
  } catch (err) {
    console.log(err)
    return res.status(422).json(err)
  }
}

//Log in to an account
export const loginGroupUser = async (req, res) => {

  try {
    const groupUserToLogin = await GroupUser.findOne({ email: req.body.email })
    console.log('I am logging in', groupUserToLogin)
    if (!groupUserToLogin || !groupUserToLogin.validatePassword(req.body.password)) {
      throw new Error()
    }
    // Token
    const token = jwt.sign({ sub: groupUserToLogin._id }, secret, { expiresIn: '7 days' })
    console.log('token--->', token)
    //return response
    return res.status(200).json({ message: `Welcome back ${groupUserToLogin.username}`, token })
  } catch (err) {
    console.log('ERROR IN LOG IN', err)
    return res.status(422).json({ message: 'Unauthorized' })
  }
}