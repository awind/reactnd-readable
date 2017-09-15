import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import * as actionCreators from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ReadableAPI from '../utils/ReadableAPI'
import Select from 'react-select'
import CommentList from './CommentList'
import CommentBox from './CommentBox'
import {timeConverter} from '../utils/Helpers'

class PostDetail extends Component {

    render() {
        const match = this.props.match.params.id
        ReadableAPI.getPostComments(match).then((data) => {
            data.forEach(item => {
                this.props.addComment(item)
            })
        })

        const post = this.props.posts.filter((item) => {
            return item.id === match
        })[0]

        const options = [
            {label: "by timestamp", value: "timestamp"},
            {label: "by score", value: "score"}
        ]

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

                        <Select
                            className="category-select"
                            name="form-field-name"
                            value="timestamp"
                            options={options}
                            clearable={false}
                            onChange={this.handleSortChange}
                        />
    
                        <CommentBox id={post.id} addComment={this.props.addComment} />

                        <CommentList id={post.id} />

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