import mongoose  from 'mongoose'
import { dbURI } from '../config/environment.js'
import Activity from '../models/activity.js'
import Group from '../models/group.js'
import activityData from './data/activities.js'
import groupData from './data/groups.js'
import User from '../models/user.js'
import userData from './data/users.js'
import groupUserData from './data/groupUser.js'
import GroupUser from '../models/groupUser.js'

const seedDatabase = async () => {
  try {
    // connect to the db
    await mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    console.log('🤖 DB connected in seeds')
    
    // drop the db
    await mongoose.connection.db.dropDatabase()
    console.log('👻 DB dropped')

    // create activities using activityData
    const activities = await Activity.create(activityData)
    const users = await User.create(userData)
    console.log(`🌱 DB seeded with ${activities.length} activities & with ${users.length} users.`)

    // create groups using activityData
    const groups = await Group.create(groupData)
    const group = await GroupUser.create(groupUserData)
    console.log(`🌱 DB seeded with ${groups.length} groups & with ${group.length} users.`)

    //close connection
    await mongoose.connection.close()
    console.log('✌🏿 bye')

  } catch (err) {
    console.log('error in seedDataBase ---->', err)
    await mongoose.connection.close()
    console.log('✌🏿 bye')
  }
}

seedDatabase()

