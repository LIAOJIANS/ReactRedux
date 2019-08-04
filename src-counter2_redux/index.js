import React from 'react'
import { render } from 'react-dom'

import App from './comopents/app'
import store from './redux/store'

function renders() {
    render(<App  store = { store } />, document.getElementById('root'))
}
renders()

store.subscribe(renders)
