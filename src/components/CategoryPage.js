import React, { Component } from 'react'
import PostList from './PostList'
import NewPostBtn from './NewPostBtn'
import { withRouter } from 'react-router-dom'

const CategoryPageWithRouter = withRouter(props => <CategoryPage {...props} />)

class CategoryPage extends Component {

    render() {
        console.log(this.props)
        const category = this.props.match.params.category
        const posts = this.props.posts.filter((item) => {
            return item.category === category
        })
        
        return (
            <div>
                <div>
                    <PostList posts={posts} />
                </div>
                <NewPostBtn />
            </div>
        )
    }
}

export default CategoryPageWithRouter