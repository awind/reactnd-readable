import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemText } from 'material-ui/List'
import * as ReadableAPI from '../utils/ReadableAPI'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actionCreators from '../actions'
import { bindActionCreators } from 'redux'

class NavigationHeader extends Component {
    state = {
        drawerOpen: false,
    }

    handleDrawerOpen = () => {
        this.setState({
            drawerOpen: true
        })
    }

    handleDrawerClose = () => {
        this.setState({
            drawerOpen: false
        })
    }

    componentDidMount() {
        ReadableAPI.getCategories().then(data => {
            console.log(data)
            data.forEach((item) => {
                this.props.addCategory({name: item.name, path: item.path})
            })
        })
    }

    render() {
        return (
            <div className="App-header">
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="contrast" aria-label="Menu" onClick={this.handleDrawerOpen}>
                            <MenuIcon />
                        </IconButton>
                        <Typography type="title" color="inherit" className="header-title">
                            {this.props.title}
                        </Typography>
                        <Button color="contrast"><NavLink className="add-link" to='/add'>Add Post</NavLink></Button>
                    </Toolbar>
                </AppBar>

                <Drawer
                    open={this.state.drawerOpen}
                    onRequestClose={this.handleDrawerClose}
                    onClick={this.handleDrawerClose}>
                    <div>
                        <List className="navigation-list">
                            {this.props.categories && this.props.categories.map((item, index) => {
                                return (
                                    <NavLink className="add-link" to={`/${item.name}`} key={index}>
                                        <ListItem button>
                                            <ListItemText primary={item.name} />
                                        </ListItem>
                                    </NavLink>
                                )
                            })}
                        </List>
                    </div>
                </Drawer>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        categories: state.categories
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationHeader)