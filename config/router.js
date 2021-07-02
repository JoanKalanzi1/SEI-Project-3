import express from 'express'
import { getAllActivities, addActivity, getOneActivity, updateActivity, deleteActivity } from '../controllers/activity.js'
import { getAllGroups, addGroup, getOneGroup, updateGroup, deleteGroup, addComment, deleteComment } from '../controllers/group.js'
import { registerUser, loginUser } from '../controllers/auth.js'
import { secureRoute } from './secureRoute.js'

const router = express.Router()

// Activity
router.route('/activities')
  .get(getAllActivities)
  .post(secureRoute, addActivity)

// Group
router.route('/groups')
  .get(getAllGroups)
  .post(secureRoute, addGroup)

// Activity
router.route('/activities/:id')
  .get(getOneActivity)
  .put(secureRoute, updateActivity)
  .delete(secureRoute, deleteActivity)

// Activity
router.route('/groups/:id')
  .get(getOneGroup)
  .put(secureRoute, updateGroup)
  .delete(secureRoute, deleteGroup)

//Group
router.route('/groups/:id/comments')
  .post(secureRoute, addComment)

//Group
router.route('/shows/:id/comments/:commentId')
  .delete(secureRoute, deleteComment)


router.route('/register')
  .post(registerUser)

router.route('/login')
  .post(loginUser)

export default router