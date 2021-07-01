import express from 'express'
import { getAllActivities, addActivity, getOneActivity, updateActivity, deleteActivity } from '../controllers/activity.js'
import { registerUser, loginUser } from '../controllers/auth.js'
import { secureRoute } from './secureRoute.js'

const router = express.Router()

router.route('/activities')
  .get(getAllActivities)
  .post(secureRoute, addActivity)

router.route('/activities/:id')
  .get(getOneActivity)
  .put(secureRoute, updateActivity)
  .delete(secureRoute, deleteActivity)

router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)

export default router