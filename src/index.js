import React from 'react'
import ReactDOM from 'react-dom'

import './assets/styles/shared.sass'
import App from './App'
import registerServiceWorker from './helpers/registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

