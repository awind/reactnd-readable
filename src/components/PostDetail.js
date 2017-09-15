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

    state = {
        sortBy: "timestamp"
    }

    handleSortChange = (e) => {
        this.setState({sortBy: e.target.value})
    }

    handleDeleteComment = (item) => {
        ReadableAPI.deleteComment(item.id).then(data => {
            this.props.deleteComment(item.id)
        })
    }

    componentDidMount() {
        const match = this.props.match.params.id
        ReadableAPI.getPostComments(match).then((data) => {
            data.forEach(item => {
                this.props.addComment(item)
            })
        })
    }

    render() {
        const match = this.props.match.params.id
        const post = this.props.posts.filter((item) => {
            return item.id === match
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
                        </div>

                        <p>{post.body}</p>
                        
                    </div>

                    <select onChange={this.handleSortChange}>
                        <option value="timestamp">timestamp</option>
                        <option value="score">score</option>
                    </select>

                    <CommentBox id={post.id} addComment={this.props.addComment} />

                    <CommentList id={post.id} comments={this.props.comments} sortBy={this.state.sortBy} deleteComment={this.handleDeleteComment} />

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