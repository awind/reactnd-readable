import React, { Component } from 'react'
import '../css/App.css'
import PostList from './PostList'
import NewPostBtn from './NewPostBtn'

class MainPage extends Component {


    render() {
        return (
            <div>
                <div>
                    <PostList posts={this.props.posts} />
                </div>
                <NewPostBtn />
            </div>
        )
    }
}


export default MainPage