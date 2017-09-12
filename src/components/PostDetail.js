import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import * as actionCreators from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ReadableAPI from '../utils/ReadableAPI'
import CommentList from './CommentList'


class PostDetail extends Component {


    render() {
        const match = this.props.match.params.id

        ReadableAPI.getPostComments(match).then((data) => {
            data.forEach(item => {
                this.props.addComment(item)
            })
        })

        const category = this.props.match.params.category
        const post = this.props.posts.filter((item) => {
            return item.id === match
        })[0]
        return (
            <div>
                { post && <div className="box">
                        <div className="header">
                            <h1>{post.title}</h1>

                            <div className="info">
                                <span className="floor">{post.author}</span>
                                <span className="time">2017-09-10</span>
                                <span className="score">{post.voteScore}</span>
                                <NavLink className="editPost" to={`/${category}/edit/${post.id}`}>Edit</NavLink>
                            </div>

                            <p>{post.body}</p>
                            
                        </div>

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