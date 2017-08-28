import React, { Component } from 'react'
import './css/App.css'
import * as ReadableAPI from './ReadableAPI'
import NavigationHeader from './components/NavigationHeader'

class App extends Component {
  componentDidMount() {
    ReadableAPI.getCategories().then(data => console.log(data))
    ReadableAPI.getCategoryPosts('redux').then(data => console.log(data))
  }


  render() {
    return (
      <div className="App">
        <NavigationHeader />
      </div>
    );
  }
}

export default App
