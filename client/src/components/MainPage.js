import React, { Component } from 'react'
import '../css/App.css'
import PostList from './PostList'
import NewPostBtn from './NewPostBtn'

class MainPage extends Component {

    handleSortChange = (e) => {
        const sortBy = e.target.value
        sortBy === 'timestamp' ? this.props.orderByTimestamp() : this.props.orderByScore()
    }

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