import React, { Component } from 'react'
import * as ReadableAPI from '../utils/ReadableAPI'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import { uuid } from '../utils/Helpers'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import * as actionCreators from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class PostEdit extends Component {

    state = {
        id: "", 
        title: "",
        body: "",
        category: "",
    }

    componentDidMount() {
        const id = this.props.match.params.id
        if(id) {
            const posts = this.props.posts.filter((item) => {
                return item.id === id
            })
            if(posts.length > 0) {
                console.log(posts[0])
                const post = posts[0]
                this.setState({id: post.id, title: post.title, body: post.body, category: post.category})
            }
        }
    }

    handleInput = (e) => {
        const { id, value } = e.target
        if(id === 'title') {
            this.setState({title: value})
        } else if (id === 'body') {
            this.setState({body: value})
        } 
    }

    handleAddPost = () => {
        const { title, body, category } = this.state
        const id = uuid(22, 20)
        const timestamp = Date.now()
        ReadableAPI.addPost({id: id, 
            timestamp: timestamp, 
            title: title, 
            body: body,
            author: "ppp", 
            category: category }
        ).then((data) => {
            console.log(data)
            this.props.addPost({id: id,
                timestamp: timestamp,
                title: title,
                body: body,
                author: 'ppp',
                category: category,
                voteScore: data.voteScore,
                deleted: data.deleted,
            })
            this.props.history.push('/' + category)
        })
    }

    handleUpdatePost = () => {
        const { id, title, body, category } = this.state
        ReadableAPI.updatePost({id: id, title: title, body: body}).then((data) => {
            console.log("update post: ", data)
            this.props.editPost({id: id, title: title, body: body})
            this.props.history.push('/' + category)
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

    handleCategoryChange = (val) => {
        console.log("selected: " + JSON.stringify(val))
        this.setState({category: val.value})
    }

    render() {
        const categories = this.props.categories
        var options = []
        categories.forEach((item, index) => {
            options.push({value: item.name, label: item.name})
        })
        
        return (
            <div>
                <TextField
                    id="title"
                    label="Title"
                    margin="normal"
                    value={this.state.title}
                    onChange={this.handleInput}
                    fullWidth
                />

                <TextField
                    id="body"
                    label="Body"
                    margin="normal"
                    value={this.state.body}
                    onChange={this.handleInput}
                    fullWidth
                    multiline
                    rows="10"
                />

                

                <Select
                    className="category-select"
                    name="form-field-name"
                    value={this.state.category}
                    options={options}
                    clearable={false}
                    onChange={this.handleCategoryChange}
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
        posts: state.posts,
        categories: state.categories,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit)