import React, { Component } from 'react'
import * as ReadableAPI from '../ReadableAPI'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import { NavLink } from 'react-router-dom'

class PostList extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        ReadableAPI.getCategoryPosts('react').then(data => {
            console.log(data)
            this.setState({posts: data})
        })
    }

    render() {
        return (
            <div>
                { this.state.posts.map((item, index) => {
                    return (
                        <div key={index}>
                            <Card className="card">
                                <CardContent>
                                    <Typography type="headline" component="h2">
                                        {item.title}
                                    </Typography>
                                    <Typography type="body1">
                                        {item.author}
                                    </Typography>
                                    <Typography type="body2">
                                        {item.body}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button dense><NavLink className="read-post-link" to={`/detail/${item.id}`}>Read More...</NavLink></Button>
                                </CardActions>
                            </Card>
                      </div>
                    )
                })}
            </div>
        )
    }
}

export default PostList