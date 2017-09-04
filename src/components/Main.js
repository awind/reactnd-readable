import React, { Component } from 'react'
import '../css/App.css'
import NavigationHeader from './NavigationHeader'
import PostList from './PostList'
import * as ReadableAPI from '../utils/ReadableAPI'
import { connect } from 'react-redux'
import * as actionCreators from '../actions'
import { bindActionCreators } from 'redux'

class Main extends Component {

    fetchPost = (category) => {
        ReadableAPI.getCategoryPosts(category).then(data => {
            console.log(data)
            data.forEach((item) => {
                this.props.addPost(item)
            })
        })
    }

    componentWillReceiveProps(props) {
        const category = props.match.params.category
        console.log(category)
        this.fetchPost(category)
    }

    render() {
        const category = this.props.match.params.category
        return (
            <div className="App">
                <NavigationHeader title={category}/>
                <PostList posts={this.props.posts}/>
          </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)