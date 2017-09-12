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
        this.fetchPost(category)
    }

    componentDidMount () {
        const match = this.props.match.params.category
        this.fetchPost(match)
        // Progress
        ReadableAPI.getCategories().then(data => {
            console.log(data)
            data.forEach((item) => {
                this.props.addCategory({name: item.name, path: item.path})
            })
            if(!match) {
                this.props.history.push('/' + data[0].name)
            }
        })
    }
    

    render() {
        const category = this.props.match.params.category
        const posts = this.props.posts.filter((item) => {
            return item.category === category
        })
        return (
            <div className="App">
                <NavigationHeader title={category} categories={this.props.categories} />
                <PostList posts={posts}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(Main)