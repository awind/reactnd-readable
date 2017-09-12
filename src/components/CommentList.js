import React, { Component } from 'react'
import * as actionCreators from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ReadableAPI from '../utils/ReadableAPI'
import { uuid, timeConverter } from '../utils/Helpers'

class CommentList extends Component {

    state = {
        inputAuthor: "",
        inputComment: "",
    }

    handleAuthorChange = (e) => {
        this.setState({inputAuthor: e.target.value})
    }

    handleCommentChange = (e) => {
        this.setState({inputComment: e.target.value})
    }

    handleSubmitComment = () => {
        const parentId = this.props.id
        const author = this.state.inputAuthor
        const body = this.state.inputComment
        const id = uuid(22, 20)
        const timestamp = Date.now()

        ReadableAPI.addPostComment({id: id, timestamp: timestamp, author: author,
            body: body, parentId: parentId}).then(data => {
                console.log(data)
                this.setState({inputAuthor: "", inputComment: ""})
                this.props.addComment({id: id, timestamp: timestamp, author: author,
                    body: body, parentId: parentId})
            })
    }

    handleDeleteComment = (item) => {
        console.log(item)
        ReadableAPI.deleteComment(item.id).then(data => {
            console.log(data)
        })
    }

    render() {
        const id = this.props.id
        const comments = this.props.comments.filter(item => {
            return item.parentId === id
        })
        
        return (
            <div>
                <div className="textarea-container">
                    <input type="text" value={this.state.inputAuthor} className="input-author" onChange={this.handleAuthorChange} placeholder="Please input you name"></input>
                    <textarea cols="80" value={this.state.inputComment} name="msg" rows="5" onChange={this.handleCommentChange} className="ipt-text"></textarea>
                    <button type="submit" className="comment-submit" onClick={this.handleSubmitComment}>Submit</button>
                </div>

                {   
                    comments.map((item, index) => {
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
                                    <span className="score">{item.voteScore}</span>
                                    <a><span className="editPost">edit</span></a>
                                    <a><span onClick={() => this.handleDeleteComment(item)} className="editPost">delete</span></a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        comments: state.comments,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)