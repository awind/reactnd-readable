import React, { Component } from 'react'
import * as actionCreators from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ReadableAPI from '../utils/ReadableAPI'
import { timeConverter } from '../utils/Helpers'
import Modal from 'react-modal'
import { NavLink } from 'react-router-dom'

class CommentList extends Component {

    state = {
        commentModalOpen: false,
    }

    openCommentModal = () => {
        this.setState({commentModalOpen: true})
    }

    closeCommentModal = () => {
        this.setState({commentModalOpen: false})
    }
 
    handleSortChange = () => {

    }

    handleDeleteComment = (item) => {
        ReadableAPI.deleteComment(item.id).then(data => {
            this.props.deleteComment(item.id)
        })
    }

    handleUpdateComment = (body) => {
        // ReadableAPI.editComment
    }

    render() {
        const id = this.props.id
        const comments = this.props.comments.filter(item => {
            return item.parentId === id
        })
        
        return (
            <div>
                {  comments.map((item, index) => {
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
                                    <span className="editPost"><NavLink to={`/editcomment/${item.id}`}>edit</NavLink></span>
                                    <a><span onClick={() => this.handleDeleteComment(item)} className="editPost">delete</span></a>
                                </div>
                            </div>
                        )
                    })
                }

                <Modal
                    className="modal"
                    overlayClassName="overlay"
                    isOpen={this.state.commentModalOpen}
                    onRequestClose={this.closeCommentModal}
                    contentLabel="Modal"
                >
                    <div className="textarea-container">
                        <form onSubmit={(e) => {
                            e.preventDefault()

                        }}>
                            <input id="author" type="text" className="input-author" placeholder="Please input you name" ref={(author) => this.author = author}></input>
                            <textarea id="body" cols="80" rows="5" className="ipt-text" ref={(body) => this.body = body}></textarea>
                            <button type="submit" className="edit-comment-submit">Submit</button>
                        </form>
                    </div>

                </Modal>
                
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