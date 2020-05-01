import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './Tweet.module.css'

import TweeetterContext from '../../context/tweeetterContext'

const Tweet = ({ data }) => {
   const { likeTweet } = useContext(TweeetterContext)
   const { id, user, pic, likes, body, isLiked, comments } = data

   const handleClick = (e) => {
      if (e.target.className === 'far fa-heart' || e.target.className === 'fas fa-heart') {
         e.preventDefault()
         likeTweet(id)
      }
   }

   return (
      <Link to={`/tweet/${id}`} onClick={handleClick}>
         <div className={styles.tweetContainer}>
            <div className={styles.imgContainer}>
               <img src={pic} alt="profile-pic" />
            </div>

            <div className={styles.tweetContent}>
               <h4 className={styles.username}>{user}</h4>
               <p>{body}</p>

               <div className={styles.stats}>

                  <div
                     className={styles.likes}
                     style={isLiked ? { color: '#E0245E' } : null}
                  >
                     <i
                        className={isLiked ? 'fas fa-heart' : 'far fa-heart'}
                     />
                     <small>{likes}</small>
                  </div>

                  <div className={styles.comments}>
                     <i className="far fa-comment" />
                     <small>{comments.length}</small>
                  </div>

               </div>
            </div>
         </div>
      </Link>
   )
}

export default Tweet