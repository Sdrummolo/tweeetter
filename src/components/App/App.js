import React, { useContext, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NewTweet from '../NewTweet/NewTweet'
import Spinner from '../Spinner/Spinner'
import TweetsContainer from '../TweetsContainer/TweetsContainer'
import TweetPage from '../TweetPage/TweetPage'

import styles from './App.module.css'
import TweeetterContext from '../../context/tweeetterContext'

function App() {
  const { getTweets, isLoading } = useContext(TweeetterContext)

  useEffect(() => {
    getTweets()
  }, [])

  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/tweeetter" exact render={props => (
            <>
              <h1>Home</h1>
              <NewTweet />
              <TweetsContainer />
              {isLoading ? <Spinner /> : null}
            </>
          )} />
          <Route path="/tweeetter/tweet/:id" component={TweetPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App