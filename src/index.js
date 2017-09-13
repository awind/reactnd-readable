import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import rootReducer from './reducers/index'
import createBrowserHistory from 'history/createBrowserHistory'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const defaultStore = {
    posts: [],
    comments: [],
    categories: [],
}

const store = createStore(
    rootReducer,
    defaultStore,
    composeEnhancers(
        // applyMiddleware(logger)
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
