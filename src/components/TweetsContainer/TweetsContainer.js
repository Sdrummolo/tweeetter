import React, { useContext } from "react"
import Tweet from "../Tweet/Tweet"

import TweeetterContext from "../../context/tweeetter/tweeetterContext"

const TweetsContainer = () => {
	const { tweets } = useContext(TweeetterContext)

	if (!tweets) {
		return null
	}

	return (
		<div className="tweetsContainer">
			{tweets.map((data) => {
				return <Tweet key={data.id} data={data} />
			})}
		</div>
	)
}

export default TweetsContainer
