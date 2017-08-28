import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import * as ReadableAPI from '../ReadableAPI'

class NavigationHeader extends Component {
    state = {
        drawerOpen: false,
        categories: []
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
            this.setState({categories: data})
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
                        <Typography type="title" color="inherit">
                            React
                        </Typography>
                    </Toolbar>
                </AppBar>

                <Drawer
                    open={this.state.drawerOpen}
                    onRequestClose={this.handleDrawerClose}
                    onClick={this.handleDrawerClose}>
                    <div>
                        <List className="navigation-list">
                            {this.state.categories.map((item, index) => {
                                return (
                                    <ListItem button key={index}>
                                        <ListItemText primary={item.name} />
                                    </ListItem>
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