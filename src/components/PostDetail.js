import React, { Component } from 'react'
import * as ReadableAPI from '../ReadableAPI'

class PostDetail extends Component {

    fetchPost = (id) => {
        ReadableAPI.getPostDetail(id).then(data => console.log(data))
    }

    fetchPostComments = (id) => {
        ReadableAPI.getPostComments(id).then(data => console.log(data))
    }

    componentDidMount() {
        let match = this.props.match.params.id
        console.log(match)
        this.fetchPost(match)
        this.fetchPostComments(match)
    }

    render() {
        return (
            <div>
                Post Detail
            </div>
        )
    }
}

export default PostDetail