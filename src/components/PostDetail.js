import React, { Component } from 'react'
import * as ReadableAPI from '../utils/ReadableAPI'
import { NavLink } from 'react-router-dom'
import * as actionCreators from '../actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class PostDetail extends Component {

    render() {
        const match = this.props.match.params.id
        const post = this.props.posts.filter((item) => {
            return item.id === match
        })[0]
        return (
            <div>
                { post && <div>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                        <NavLink to={`/edit/${post.id}`}>Edit</NavLink>
                    </div>
                }
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

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail)