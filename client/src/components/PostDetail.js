import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import * as actionCreators from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ReadableAPI from '../utils/ReadableAPI'
import CommentList from './CommentList'
import CommentBox from './CommentBox'
import {timeConverter} from '../utils/Helpers'

class PostDetail extends Component {

    handleSortChange = (e) => {
        const sortBy = e.target.value
        if(sortBy === 'timestamp') {
            this.props.commentsOrderByTimestamp()
        } else if (sortBy === 'score') {
            this.props.commentsOrderByScore()
        }
    }

    handleDeletePost = (item) => {
        ReadableAPI.deletePost(item.id).then((data) => {
            this.props.deletePost(item.id)
            this.props.history.goBack()
        })
    }

    handleDeleteComment = (item) => {
        ReadableAPI.deleteComment(item.id).then(data => {
            this.props.deleteComment(item.id)
        })
    }

    handleUpVote = (item) => {
        ReadableAPI.votePost({id: item.id, option: 'upVote'}).then(data => {
            this.props.upVotePost(item.id)
        })
    }

    handleDownVote = (item) => {
        ReadableAPI.votePost({id: item.id, option: 'downVote'}).then(data => {
            this.props.downVotePost(item.id)
        })
    }

    handleUpComment = (item) => {
        ReadableAPI.voteComment({id: item.id, option: 'upVote'}).then(data => {
            this.props.upVoteComment(item.id)
        })
    }

    handleDownComment = (item) => {
        ReadableAPI.voteComment({id: item.id, option: 'downVote'}).then(data => {
            this.props.downVoteComment(item.id)
        })
    }

    render() {
        const match = this.props.match.params.id
        const post = this.props.posts.filter((item) => {
            return item.id === match && !item.deleted
        })[0]

        return (
            <div>
                { post && <div className="box">
                    <div className="header">
                        <h1>{post.title}</h1>

                        <div className="info">
                            <span className="floor">author: {post.author}</span>
                            <span className="time">created time: {timeConverter(post.timestamp)}</span>
                            <span className="score">score: {post.voteScore}</span>
                            <NavLink className="editPost" to={`/editpost/${post.id}`}>Edit</NavLink>
                            <span className="action-span" onClick={(e) => {this.handleDeletePost(post)}}>Delete</span>
                            <span className="action-span" onClick={(e) => {this.handleUpVote(post)}}>up vote</span>
                            <span className="action-span" onClick={(e) => {this.handleDownVote(post)}}>down vote</span>
                        </div>

                        <p>{post.body}</p>
                        
                    </div>

                    <select onChange={this.handleSortChange}>
                        <option value="timestamp">timestamp</option>
                        <option value="score">score</option>
                    </select>

                    <CommentBox id={post.id} addComment={this.props.addComment} />

                    <CommentList id={post.id} comments={this.props.comments} deleteComment={this.handleDeleteComment} upVote={this.handleUpComment} downVote={this.handleDownComment} />

                    </div>
                }

                { !post && <div className="box">
                        <p>Sorry, we can not find this post, it's maybe already deleted.</p>
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)