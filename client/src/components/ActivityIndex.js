// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import ActivityCard from '../components/ActivityCard'

// const ActivityIndex = () => {
//   const [activity, setActivity] = useState([])

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const { data } = await axios.get('/api/activities')
//         setActivity(data)
//       } catch (err) {
//         console.log(err)
//       }
//     }
//     getData()
//   }, [])

//   return (
//     <section className="section">
//       <div className="container">
//         <div className="content is-large">
//           <h1 className="title has-text-primary"> Activity</h1>
//           <div className="columns is-multiline">
//             {activity.map(activity => {
//               return <ActivityCard key={activity._id} {...activity}/>
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ActivityIndex