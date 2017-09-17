import React, { Component } from 'react'

class PostForm extends Component {

    render() {
        const post = this.props.post
        return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                if(post) {
                    this.props.onUpdateSubmit({id: post.id, title: this.title.value, 
                        author: this.author.value, body: this.body.value,
                        category: this.category.value})
                } else {
                    this.props.onAddSubmit({title: this.title.value, 
                        author: this.author.value, body: this.body.value,
                        category: this.category.value})
                }
            }}>
            <input
                type="text"
                defaultValue={post ? post.title : ""}
                placeholder="title"
                className="input-author"
                ref={(title) => this.title = title}
            />

            <input
                type="text"
                placeholder="author"
                className="input-author"
                defaultValue={post ? post.author : ""}
                ref={(author) => this.author = author}
            />

            <textarea
                rows="10"
                cols="80"
                placeholder="body"
                defaultValue={post ? post.body : ""}
                className="ipt-text"
                ref={(body) => this.body = body}
            />

            <select defaultValue={post ? post.category : ""} ref={(category) => this.category = category}>
                {this.props.categories.map((item, index) => {
                    return (
                        <option key={index} value={item.path}>{item.name}</option>
                    )
                })}
            </select>
                
            <button type="submit" className="button">
                Done
            </button>

            </form>
        </div>
    )
    }
}

export default PostForm