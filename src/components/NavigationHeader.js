import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class NavigationHeader extends Component {
    
    render() {
        const categories = this.props.categories
        return (
            <div className="App-header">
                <table><tbody><tr><td>
                    <span className="pagetop">
                        <b className="gankname"><NavLink to={'/'}>Readable </NavLink></b>
                            { categories.map((item, index) => {
                                return (
                                    <NavLink key={index} activeClassName="active-link" to={`/${item.path}`}>{item.name} | </NavLink>
                                )
                            })}
                    </span>
                </td></tr></tbody></table>
            </div>
        )
    }
}

export default NavigationHeader