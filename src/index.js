import React from 'react'
import ReactDOM from 'react-dom'

import App from './views/App.js'
import './styles/master.scss'

import store from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
