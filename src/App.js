import React, { Component } from 'react'
import './css/App.css'
import * as ReadableAPI from './ReadableAPI'
import NavigationHeader from './components/NavigationHeader'
import PostList from './components/PostList'

class App extends Component {
  componentDidMount() {
    ReadableAPI.getCategoryPosts('redux').then(data => console.log(data))
  }


  render() {
    return (
      <div className="App">
        <NavigationHeader />
        <PostList />
      </div>
    );
  }
}

export default App
