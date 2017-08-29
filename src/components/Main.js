import React, { Component } from 'react'
import '../css/App.css'
import NavigationHeader from './NavigationHeader'
import PostList from './PostList'

class Main extends Component {

    render() {
        return (
            <div className="App">
                <NavigationHeader />
                <PostList />
          </div>
        )
    }
}

export default Main