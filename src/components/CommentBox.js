import React, { Component } from 'react'
import * as ReadableAPI from '../utils/ReadableAPI'
import { uuid } from '../utils/Helpers'

class CommentBox extends Component {

    handleSubmit = ({author, body}) => {
        const parentId = this.props.id
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

    render() {
        return (
            <div className="textarea-container">
                <form onSubmit={(e) => {
                    e.preventDefault()
                    this.handleSubmit({author: this.author.value, body: this.body.value})
                    this.author.value = ""
                    this.body.value = ""
                    }}>
                    <input id="author" type="text" className="input-author" placeholder="Please input you name" ref={(author) => this.author = author}></input>
                    <textarea cols="80" rows="5" className="ipt-text" ref={(body) => this.body = body}></textarea>
                    <button type="submit" className="comment-submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default CommentBox