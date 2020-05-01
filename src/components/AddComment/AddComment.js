import React, { useState, useContext, useEffect, useRef } from 'react'

import styles from './AddComment.module.css'
import TweeetterContext from '../../context/tweeetterContext'

const AddComment = ({ handleClick, closeModal, id, user, body }) => {
   const { addComment } = useContext(TweeetterContext)
   const [input, setInput] = useState('')
   const inputRef = useRef(null);

   const handleChange = (e) => {
      setInput(e.target.value)
   }

   // Creates new comment and adds it in state
   const handleSubmit = (e) => {
      e.preventDefault()

      const comment = {
         pic: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_reasonably_small.png',
         user: 'Demo-User',
         text: input
      }

      addComment(id, comment)
      setInput('')
      closeModal()
   }

   // Sets focus on the textarea on render
   useEffect(() => {
      inputRef.current.focus()
   }, [])


   return (
      <div className='modal-container' onClick={handleClick}>
         <div className={styles.modal}>

            <div className={styles.header}>
               <i className="fas fa-times fa-lg"
                  onClick={handleClick}
               />
            </div>

            <div className={styles.tweet}>
               <img src='https://abs.twimg.com/sticky/default_profile_images/default_profile_reasonably_small.png' alt="user" />

               <div className={styles.body}>
                  <h4 className={styles.user}>{user}</h4>
                  <p className={styles.text}>{body}</p>
               </div>

            </div>

            <div className={styles.form}>
               <form onSubmit={handleSubmit}>
                  <textarea
                     placeholder="Tweet your reply"
                     value={input}
                     onChange={handleChange}
                     ref={inputRef}
                     required
                  >
                  </textarea>
                  <button type="submit">Reply</button>
               </form>
            </div>
         </div>
      </div>
   )
}

export default AddComment