import jwt from 'jsonwebtoken'
import { secret } from './environment.js'
import GroupUser from '../models/groupUser.js'

export const secureRouteGroupUser = async (req, res, next) => {
  try {
    if (!req.headers.authorization) throw new Error('Missing headers')
    const token = req.headers.authorization.replace('Bearer ', '')
    console.log('Token-->', token)
    //payload extracted from token
    const payload = jwt.verify(token, secret)
    console.log('Payload-->', payload)
    // find user based on id in payload
    const groupUserToVerify = await GroupUser.findById(payload.sub)
    // Check to make sure user exists
    if (!groupUserToVerify) throw new Error('Group not found')

    next()
  } catch (err) {
    console.log(err)
    return res.status(401).json({ message: 'Unauthorized' })
  }
}
