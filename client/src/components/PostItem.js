import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {timeConverter} from '../utils/Helpers'
import * as actionCreators from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ReadableAPI from '../utils/ReadableAPI'

class PostItem extends Component {

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

    handleDeletePost = (item) => {
        ReadableAPI.deletePost(item.id).then((data) => {
            this.props.deletePost(item.id)
        })
    }

    componentDidMount() {
        const post = this.props.item
        if(this.props.comments.length === 0) {
            ReadableAPI.getPostComments(post.id).then((data) => {
                data.forEach(commentItem => {
                    this.props.addComment(commentItem)
                })
            })
        }

    }

    render() {
        const post = this.props.item
        var commentsCount = 0
        if(this.props.comments) {
            commentsCount = this.props.comments.filter((item) => {
                return item.parentId === post.id
            }).length
        }
        return (
            <div className='gank-details'>
                <NavLink to={`/detail/${post.id}`}>
                    <span className="item-index">{this.props.index + 1}.</span>
                    <span className="post-title">{post.title}</span>
                    <span className="author">({post.author})</span>
                </NavLink>
                <p>
                <span className="author">comments: {commentsCount} </span>
                <span className="author">score: {post.voteScore} </span>
                <span className="author">created: {timeConverter(post.timestamp)}</span>
                <span className="action-span" onClick={e => {this.handleDownVote(post)}}>down vote</span>
                <span className="action-span" onClick={e => {this.handleUpVote(post)}}>up vote</span>
                <span className="action-span" onClick={e => {this.handleDeletePost(post)}}>delete</span>
                </p>
                
        </div>
        )
    }
}

function mapStateToProps({comments}) {
    return {
        comments
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostItem)