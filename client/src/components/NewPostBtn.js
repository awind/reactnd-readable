import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class NewPostBtn extends Component {

    render() {
        return (
            <div className="add-post">
              <Link to='/add'>Add a post</Link>
            </div>
        )
    }
}

export default NewPostBtn