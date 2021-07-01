import express from 'express'
import { getAllActivities, addActivities, getOneActivities, updateActivities, deleteActivities } from '../controllers/activity.js'

const router = express.Router()

router.route('/activities')
  .get(getAllActivities)
  .post(addActivities)

router.route('/activities/:id')
  .get(getOneActivities)
  .put(updateActivities)
  .delete(deleteActivities)

export default router