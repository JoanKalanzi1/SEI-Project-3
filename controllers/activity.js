import Activity from '../models/activity.js'

// INDEX ROUTE
export const getAllActivities = async (_req, res) => {
  const activities = await Activity.find()
  return res.status(200).json(activities)
}

// CREATE ROUTE - add a new activity
export const addActivities = async (req, res) => {
  try {
    const activityToAdd = await Activity.create(req.body)
    return res.status(201).json(activityToAdd)
  } catch (err) {
    console.log(err)
    return res.status(422).json(err)
  }
}

// SHOW ROUTE - Individual Activity
 export const getOneActivities = async (req, res) => {
  try {
   const { id } = req.params
   const singleActivities =  await Activity.findById(id)
   if (!singleActivities) throw new Error()
   return res.status(200).json(singleActivities)
  } catch (err) {
    console.log('I am wrong', err)
    return res.status(404).json({ 'message': 'not found' })
  }
}
//DELETE ROUTE
export const deleteActivity = async (req, res) => {
  try {
    const { id } = req.params
    const activityToDelete = await Activity.findById(id)
    if(!activityToDelete) throw new Error()
    await activityToDelete.remove()
    return res.sendStatus(204)
  } catch (err) {
    console.log('ERROR IN DELETE',err)
    return res.status(404).json({ 'message': 'not found' })
  }
}

// Update ROUTE - Editing an individual activity
export const updateActivity =  async (req, res) => {
  const { id } = req.params
  try {
    const activityToUpdate = await Activity.findOneAndUpdate({ _id: id}, { ...req.body }, { new: true })
    if (!activityToUpdate) throw new Error()
    return res.status(200).json(activityToUpdate)
  } catch (err) {
    console.log('ERROR IN EDIT ROUTE:', err)
    return res.status(404).json({ 'message': 'activity not found' })
  }
}

// create comment

// delete comment