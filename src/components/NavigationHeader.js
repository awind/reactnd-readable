import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemText } from 'material-ui/List'
import { NavLink } from 'react-router-dom'

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
                        <NavLink className="add-link" to={`/${this.props.title}/add`}><Button color="contrast">Add Post</Button></NavLink>
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

export default NavigationHeader