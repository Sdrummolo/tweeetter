import React, { useState, useContext } from 'react'
import uuid from 'react-uuid'

import TweeetterContext from '../../context/tweeetterContext'

const NewTweet = () => {
   const { postTweet } = useContext(TweeetterContext)
   const [input, setInput] = useState('')

   const handleChange = (e) => {
      setInput(e.target.value)
   }

   const handleSubmit = (e) => {
      e.preventDefault()

      const newTweet = {
         id: uuid(),
         user: 'Demo-User',
         pic: 'https://abs.twimg.com/sticky/default_profile_images/default_profile_reasonably_small.png',
         body: input,
         likes: 0,
         isLiked: false,
         comments: []
      }

      setInput('')
      postTweet(newTweet)
   }

   return (
      <form onSubmit={handleSubmit}>
         <textarea
            type="text"
            maxLength="140"
            placeholder="What's happening?"
            value={input}
            onChange={handleChange}
            required
         />
         <button type="submit">Tweet</button>
      </form>
   )
}
export default NewTweet
