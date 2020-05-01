import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import CommentsContainer from '../CommentsContainer/CommentsContainer'
import AddComment from '../AddComment/AddComment'
import Likes from '../Likes/Likes'
import Comments from '../Comments/Comments'

import styles from './TweetPage.module.css'
import TweeetterContext from '../../context/tweeetterContext'


const TweetPage = ({ match }) => {
   const { tweets, likeTweet } = useContext(TweeetterContext)
   const [tweet, setTweet] = useState(null)
   const [showModal, setShowModal] = useState(false)

   useEffect(() => {
      setTweet(tweets.filter(tweet => tweet.id === match.params.id)[0])
   }, [tweets, match.params.id])

   const handleClick = (e) => {
      if (e.target.className === 'fas fa-times fa-lg'
         || e.target.className === 'modal-container'
         || e.target.className === 'far fa-comment fa-lg') {
         setShowModal(!showModal)
      }
   }

   const handleLike = (e) => {
      likeTweet(tweet.id)
   }

   const closeModal = () => {
      setShowModal(false)
   }


   // Avoid rendering before tweet is fetched from context
   if (!tweet) {
      return null
   } else {
      const { user, pic, body, likes, comments, isLiked, id } = tweet

      return (
         <>
            <div className={styles.nav}>
               <Link to={'/'}>
                  <div className={styles.iconContainer}>
                     <i className="fas fa-arrow-left fa-lg"></i>
                  </div>
               </Link>
               <h1>Tweet</h1>
            </div>

            <div className={styles.tweetPage}>
               <div className={styles.user}>
                  <img src={pic} alt="profile-pic" />
                  <h4 className={styles.username}>{user}</h4>
               </div>

               <div className={styles.post}>
                  <p className={styles.tweetText}>{body}</p>
               </div>

               <div className={styles.stats}>
                  <Likes
                     likes={likes}
                     isLiked={isLiked}
                     id={id}
                     handleLike={handleLike}
                  />
                  <Comments
                     handleClick={handleClick}
                     comments={comments}
                  />
               </div>
               {comments.length > 0 ? <CommentsContainer comments={comments} /> : null}
            </div>

            {showModal ?
               <AddComment
                  handleClick={handleClick}
                  closeModal={closeModal}
                  id={id}
                  user={user}
                  body={body}
               />
               : null}
         </>
      )
   }
}

export default TweetPage
