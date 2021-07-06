// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { useParams } from 'react-router-dom'

// const ActivityShow = () => {
//   const [activity, setActivity] = useState(null)
//   const [hasError, setHasError] = useState(false)
//   const { id } = useParams()
//   console.log('params', id)


//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const { data } = await axios.get(`/api/activities/${id}`)
//         setActivity(data)
//       } catch (err) {
//         setHasError(true)
//       }
//     }
//     getData()
//   }, [id])

//   return (
//     <section className="section">
//       <div className="container">
//         {activity ?
//           <div>
//             <h2 className="title has-text-centered">{activity.nameOfActivity}</h2>
//             <hr />
//             <div className="columns">
//               <div className="column is-half">
//                 <figure className="image">
//                   <img src={activity.image} alt={activity.nameOfActivity} />
//                 </figure>
//               </div>
//               <div className="column is-half">
//                 <h4 className="title is-4"><span role="img" aria-label="globe">🌍</span> Summary</h4>
//                 <p>{activity.summary}</p>
//                 <hr />
//                 <h4 className="title is-4"><span role="img" aria-label="internet">🦾</span> Source</h4>
//                 <hr />
//               </div>
//             </div>
//           </div>
//           :
//           <h2 className="title has-text-centered">
//             {hasError ? 'Oh something went wrong' : '...loading 🤖 '}
//           </h2>
//         }
//       </div>
//     </section>
//   )
// }

// export default ActivityShow