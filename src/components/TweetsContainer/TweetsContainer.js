import React, { useContext } from 'react'
import Tweet from '../Tweet/Tweet'

import TweeetterContext from '../../context/tweeetterContext'

const TweetsContainer = () => {
   const { tweets } = useContext(TweeetterContext)

   if (!tweets) {
      return null
   }

   const feed = tweets.map(data => {
      return (<Tweet key={data.id} data={data} />)
   })

   return (
      <div className="tweetsContainer">
         {feed}
      </div>
   )
}

export default TweetsContainer