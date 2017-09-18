import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {timeConverter} from '../utils/Helpers'

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
                                <div className='gank-details'>
                                    <NavLink to={`/detail/${item.id}`}>
                                        <span className="item-index">{index + 1}.</span>
                                        <span className="post-title">{item.title}</span>
                                        <span className="author">({item.author})</span>
                                        <p className="author">created: {timeConverter(item.timestamp)}</p>
                                    </NavLink>
                                </div>
                        </td>
                                
                        )
                    })}
                </tr></tbody></table>
            </div>
        )
    }
}

export default PostList