import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from './components/Main'
import PostDetail from './components/PostDetail'

class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Main}></Route>
        <Route exact path='/add' component={PostDetail}></Route>
        <Route exact path='/detail/:id' component={PostDetail}></Route>
      </Switch>
    )
  }
}

export default App
