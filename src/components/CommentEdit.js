import React, { Component } from 'react'
import * as ReadableAPI from '../utils/ReadableAPI'
import * as actionCreators from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class CommentEdit extends Component {

    handleSubmit = ({body}) => {
        //const parentId = this.props.id
        const id = this.props.match.params.id
        const timestamp = Date.now()
        ReadableAPI.editComment({id: id, timestamp: timestamp, body: body}).then(data => {
            console.log(data)
            this.props.editComment({id: id, timestamp: timestamp, body: body})
            this.props.history.goBack()
        })
    }

    render() {
        const id = this.props.match.params.id
        const comment = this.props.comments.filter(item => {
            return item.id === id
        })[0]
        return (
            <div className="textarea-container">
                <form onSubmit={(e) => {
                    e.preventDefault()
                    this.handleSubmit({body: this.body.value})
                    
                    }}>
                    <textarea defaultValue={comment ? comment.body : ""} cols="80" rows="5" className="ipt-text" ref={(body) => this.body = body}></textarea>
                    <button type="submit" className="comment-submit">Submit</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentEdit)