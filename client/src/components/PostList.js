import React, { Component } from 'react'
import PostItem from './PostItem'

class PostList extends Component {

    render() {
        const posts = this.props.posts.filter((item) => {
            return item.deleted === false
        })

        return (
            <div className="gank-list">
                <table><tbody><tr>
                    { posts && posts.map((item, index) => {
                        return (
                            <td className='gank-list-item' key={index}>
                                <PostItem item={item} index={index} />
                        </td>
                                
                        )
                    })}
                </tr></tbody></table>
            </div>
        )
    }
}

export default PostList