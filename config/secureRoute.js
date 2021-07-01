import jwt from 'jsonwebtoken'
import { secret } from './environment.js'
import User from '../models/user.js'

export const secureRoute = async (req, res, next) => {
  try {
    if(!req.headers.authorization) throw new Error('Missing headers')
    const token = req.headers.authorization.replace('Bearer ', '')
    console.log('Token-->', token)
    //payload extracted from token
    const payload = jwt.verify(token, secret)
    console.log('Payload-->', payload)
    // find user based on id in payload
    const userToVerify = await User.findById(payload.sub)
    // Check to make sure user exists
    if(!userToVerify) throw new Error('User not found')

    next()
  } catch (err) {
    console.log(err)
    return res.status(401).json({ message: 'Unauthorized' })
  }
}
