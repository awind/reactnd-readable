import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import reducer from './reducers'
import createBrowserHistory from 'history/createBrowserHistory'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const defaultStore = {
    categories: [],
    posts: [],
    
}

const store = createStore(
    reducer,
    defaultStore,
    composeEnhancers(
        applyMiddleware(logger)
    )
)

const customHistory = createBrowserHistory()

ReactDOM.render(
    <Provider store={store}>
        <Router history={customHistory}>
            <App />
        </Router>
    </Provider>, document.getElementById('root'))
registerServiceWorker()
