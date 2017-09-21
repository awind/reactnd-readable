import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import MainPage from './components/MainPage'
import CategoryPage from './components/CategoryPage'
import PostDetail from './components/PostDetail'
import PostEdit from './components/PostEdit'
import * as ReadableAPI from './utils/ReadableAPI'
import NavigationHeader from './components/NavigationHeader'
import { addCategory, addPost } from './actions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CommentEdit from './components/CommentEdit'

class App extends Component {

  componentDidMount() {
    ReadableAPI.getCategories().then(data => {
      data.forEach((item) => {
          this.props.addCategory({name: item.name, path: item.path})
      })
    })

    // GET ALL POSTS???
    ReadableAPI.getAllPosts().then(data => {
      data.forEach((item) => {
        this.props.addPost(item)
      })
    })
  }

  render() {
    return (
      <div className="App">
        <NavigationHeader categories={this.props.categories} orderByScore={this.props.postsOrderByScore} orderByTimestamp={this.props.postsOrderByTimestamp} />

        <Switch>
          <Route exact path='/' component={() => (
            <MainPage posts={this.props.posts} />
          )}></Route>

          <Route exact path='/add' component={PostEdit}></Route>
          
          <Route exact path='/:category' render={() => (
            <CategoryPage posts={this.props.posts} />
          )}></Route>
          
          <Route exact path='/detail/:id' component={PostDetail}></Route>
          <Route exact path='/editpost/:id' component={PostEdit}></Route>
          <Route exact path='/editcomment/:id' component={CommentEdit}></Route>
        </Switch>
      </div>
    )
  }
}

function mapStateToProps({categories, posts}) {
  return {
    categories, posts
  }
}

export default withRouter(connect(mapStateToProps, {addPost, addCategory})(App))
