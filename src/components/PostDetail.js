import React, { Component } from 'react'
import * as ReadableAPI from '../utils/ReadableAPI'

class PostDetail extends Component {

    state = {
        post: null
    }

    fetchPost = (id) => {
        ReadableAPI.getPostDetail(id).then(data => {
            console.log(data)
            this.setState({post: data})
        })
    }

    fetchPostComments = (id) => {
        ReadableAPI.getPostComments(id).then(data => console.log(data))
    }

    componentDidMount() {
        let match = this.props.match.params.id
        if(match) {
            this.fetchPost(match)
            this.fetchPostComments(match)
        }
    }

    render() {
        const post = this.state.post
        return (
            <div>
                { post && <div>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                }
            </div>
        )
    }
}

export default PostDetail