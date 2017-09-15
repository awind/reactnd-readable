import React, { Component } from 'react'
import { timeConverter } from '../utils/Helpers'
import { NavLink } from 'react-router-dom'

class CommentList extends Component {

    render() {
        const comments = this.props.comments
        const sortBy = this.props.sortBy
        console.log(sortBy)
        var sortedComments = comments.sort((a, b) => 
            a.timestamp - b.timestamp
        )
        if(sortBy === 'score') {
            sortedComments = comments.sort((a, b) => 
                parseInt(a.voteScore) - parseInt(b.voteScore)
        )}
        console.log(comments)
        
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
                                    <a><span onClick={() => this.props.deleteComment(item)} className="editPost">delete</span></a>
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