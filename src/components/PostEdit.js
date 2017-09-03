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
        title: "",
        body: ""
    }

    handleTitleInputChange =(e) => {
        this.setState({title: e.target.value})
    }

    handleBodyInputChange = (e) => {
        this.setState({body: e.target.value})
    }

    handleDone = (e) => {
        e.preventDefault()
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
        })
    }

    render() {

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