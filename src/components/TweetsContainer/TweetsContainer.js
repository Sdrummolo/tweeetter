import React from "react"
import Tweet from "../Tweet/Tweet"
import PropTypes from "prop-types"

const TweetsContainer = ({ tweets }) => {
   return (
      <div className="tweetsContainer">
         {tweets.map((data) => {
            return <Tweet key={data.id} data={data} />
         })}
      </div>
   )
}

TweetsContainer.propTypes = {
   tweets: PropTypes.array.isRequired,
}

export default TweetsContainer
