import React, { Component } from 'react'
import { timeConverter } from '../utils/Helpers'
import { NavLink } from 'react-router-dom'

class CommentList extends Component {

    componentWillReceiveProps(props) {
        console.log(props)
    }

    render() {
        const comments = this.props.comments
        const parentId = this.props.id
        const sortedComments = comments.filter(item => {
            return item.parentId === parentId
        })
        
        return (
            <div>
                { sortedComments.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className="user">
                                    <p>{item.author}</p>
                                </div>
                                <p className="text">
                                    {item.body}
                                </p>
                                <div className="info">
                                    <span className="floor">#{index + 1}</span>
                                    <span className="time">{timeConverter(item.timestamp)}</span>
                                    <span className="score">score: {item.voteScore}</span>
                                    <span className="editPost"><NavLink to={`/editcomment/${item.id}`}>edit</NavLink></span>
                                    <a><span onClick={() => this.props.deleteComment(item)} className="action-span">delete</span></a>
                                    <span className="action-span" onClick={(e) => {this.props.upVote(item)}}>up vote</span>
                                    <span className="action-span" onClick={(e) => {this.props.downVote(item)}}>down vote</span>
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
        )
    }
}

export default CommentList