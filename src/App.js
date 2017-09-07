import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from './components/Main'
import PostDetail from './components/PostDetail'
import PostEdit from './components/PostEdit'

class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Main}></Route>
        <Route exact path='/:category' component={Main}></Route>
        <Route exact path='/:category/add' component={PostEdit}></Route>
        <Route exact path='/:category/detail/:id' component={PostDetail}></Route>
        <Route exact path='/:category/edit/:id' component={PostEdit}></Route>
      </Switch>
    )
  }
}

export default App
