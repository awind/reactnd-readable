import React, { Component } from 'react'
import * as ReadableAPI from '../utils/ReadableAPI'
import { uuid } from '../utils/Helpers'
import 'react-select/dist/react-select.css'
import * as actionCreators from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PostForm from './PostForm'

class PostEdit extends Component {

    handleAddPost = (post) => {
        const { title, body, category, author } = post
        const id = uuid(22, 20)
        const timestamp = Date.now()
        ReadableAPI.addPost({id: id, 
            timestamp: timestamp, 
            title: title, 
            body: body,
            author: author, 
            category: category }
        ).then((data) => {
            console.log(data)
            this.props.addPost({id: id,
                timestamp: timestamp,
                title: title,
                body: body,
                author: author,
                category: category,
                voteScore: data.voteScore,
                deleted: data.deleted,
            })
            this.props.history.push('/' + category)
        })
    }

    handleUpdatePost = (post) => {
        const id = this.props.match.params.id
        const { title, body, category } = post
        ReadableAPI.updatePost({id: id, title: title, body: body}).then((data) => {
            this.props.editPost({id: id, title: title, body: body})
            this.props.history.push('/' + category)
        })
    }

    handleDone = (post) => {
        const id = this.props.match.params.id
        if(id) {
            this.handleUpdatePost(post)
        } else {
            this.handleAddPost(post)
        }
    }

    render() {
        const id = this.props.match.params.id
        const post = this.props.posts.filter((item) => {
            return item.id === id
        })[0]
        return (
            <div>
                {post && <PostForm post={post} categories={this.props.categories} onUpdateSubmit={this.handleUpdatePost}/>}
                {!post && <PostForm categories={this.props.categories} onAddSubmit={this.handleAddPost} />}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
        categories: state.categories,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit)