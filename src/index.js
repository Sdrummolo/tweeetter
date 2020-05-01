import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App/App'
import TweeetterState from './context/TweeetterState'

ReactDOM.render(
   <TweeetterState>
      <App />
   </TweeetterState>, document.getElementById('root'))