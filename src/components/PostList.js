import React, { Component } from 'react'
import * as ReadableAPI from '../ReadableAPI'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actionCreators from '../actions'
import { bindActionCreators } from 'redux'

class PostList extends Component {

    componentDidMount() {
        ReadableAPI.getCategoryPosts('react').then(data => {
            console.log(data)
            data.forEach((item) => {
                this.props.addPost(item)
            })
        })
    }

    render() {
        return (
            <div>
                { this.props.posts.map((item, index) => {
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

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList)