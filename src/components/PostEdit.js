import React, { Component } from 'react'
import * as ReadableAPI from '../utils/ReadableAPI'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import { uuid } from '../utils/Helpers'
import * as actionCreators from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class PostEdit extends Component {

    state = {
        id: "", 
        title: "",
        body: ""
    }

    componentDidMount() {
        const id = this.props.match.params.id
        if(id) {
            console.log(id)
            const posts = this.props.posts.filter((item) => {
                return item.id === id
            })
            if(posts.length > 0) {
                console.log(posts[0])
                const post = posts[0]
                this.setState({id: post.id, title: post.title, body: post.body})
            }
        }
    }

    handleTitleInputChange =(e) => {
        this.setState({title: e.target.value})
    }

    handleBodyInputChange = (e) => {
        this.setState({body: e.target.value})
    }

    handleAddPost = () => {
        const { title, body } = this.state
        const id = uuid(22, 20)
        const timestamp = Date.now()
        ReadableAPI.addPost({id: id, 
            timestamp: timestamp, 
            title: title, 
            body: body,
            author: "ppp", 
            category: "react" }
        ).then((data) => {
            this.props.addPost({id: id,
                timestamp: timestamp,
                title: title,
                body: body,
                author: 'ppp',
                category: 'react',
                voteScore: data.voteScore,
                deleted: data.deleted,
            })
            this.props.history.push('/react')
        })
    }

    handleUpdatePost = () => {
        const { id, title, body } = this.state
        ReadableAPI.updatePost({id: id, title: title, body: body}).then((data) => {
            console.log("update post: ", data)
            this.props.editPost({id: id, title: title, body: body})
            this.props.history.push('/react')
        })
    }

    handleDone = (e) => {
        e.preventDefault()
        const id = this.props.match.params.id
        if(id) {
            this.handleUpdatePost()
        } else {
            this.handleAddPost()
        }
    }

    render() {
        const id = this.props.match.params.id
        return (
            <div>
                <TextField
                    id="title"
                    label="Title"
                    margin="normal"
                    value={this.state.title}
                    onChange={this.handleTitleInputChange}
                    fullWidth
                />

                <TextField
                    id="body"
                    label="Body"
                    margin="normal"
                    value={this.state.body}
                    onChange={this.handleBodyInputChange}
                    fullWidth
                    multiline
                    rows="10"
            />

                <Button raised color="primary" className="button" onClick={this.handleDone}>
                    Done
                </Button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit)