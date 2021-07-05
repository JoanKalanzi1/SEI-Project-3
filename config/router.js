import express from 'express'
import { getAllActivities, addActivity, getOneActivity, updateActivity, deleteActivity } from '../controllers/activity.js'
import { getAllGroups, addGroup, getOneGroup, updateGroup, deleteGroup, addComment, deleteComment, editComment } from '../controllers/group.js'
import { registerUser, loginUser } from '../controllers/auth.js'
import { registerGroupUser, loginGroupUser } from '../controllers/groupAuth.js'
import { getUserProfile } from '../controllers/users.js'
import { getGroupUserProfile } from '../controllers/groupUser.js'
import { secureRoute } from './secureRoute.js'
import { secureRouteGroupUser } from './secureRouteGroupUser.js'


const router = express.Router()

// Activity - 
router.route('/activities')
  .get(getAllActivities)
  .post(secureRouteGroupUser, addActivity)

// Group
router.route('/groups')
  .get(getAllGroups)
  .post(secureRouteGroupUser, addGroup)

// Activity
router.route('/activities/:id')
  .get(getOneActivity)
  .put(secureRouteGroupUser, updateActivity)
  .delete(secureRouteGroupUser, deleteActivity)

// Group
router.route('/groups/:id')
  .get(getOneGroup)
  .put(secureRouteGroupUser, updateGroup)
  .delete(secureRouteGroupUser, deleteGroup)

//Add comment - user & group
router.route('/groups/:id/comments')
  .post(secureRoute, addComment)
  .post(secureRouteGroupUser, addComment)

// Edit comment - user & group 
router.route('/groups/:id/comments/:commentId')
  .put(secureRoute, editComment)
  .put(secureRouteGroupUser, editComment)

//Group comment control - user & group
router.route('/groups/:id/comments/:commentId')
  .delete(secureRoute, deleteComment)
  .delete(secureRouteGroupUser, deleteComment)

// User register
router.route('/register')
  .post(registerUser)

// User login 
router.route('/login')
  .post(loginUser)

//User profile
router.route('/profile')
  .get(secureRoute, getUserProfile)

//Groupuser register
router.route('/groupRegister')
  .post(registerGroupUser)
  
// Groupuser login 
router.route('/groupLogin')
  .post(loginGroupUser)

//Groupuser profile
router.route('/groupProfile')
  .get(secureRouteGroupUser, getGroupUserProfile)

export default router