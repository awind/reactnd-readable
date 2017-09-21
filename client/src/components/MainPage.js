import React, { Component } from 'react'
import '../css/App.css'
import PostList from './PostList'
import NewPostBtn from './NewPostBtn'

class MainPage extends Component {

    handleSortChange = (e) => {
        const sortBy = e.target.value
        if(sortBy === 'timestamp') {
            this.props.orderByTimestamp()
        } else if (sortBy === 'score') {
            this.props.orderByScore()
        }
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