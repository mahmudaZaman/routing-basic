import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
            <div>
                <NavLink exact to="/"
                    activeStyle={{
                        fontWeight: 'bold',
                        color: 'red'
                    }}>Home</NavLink>
                <NavLink exact to="/about"
                    activeStyle={{
                        fontWeight: 'bold',
                        color: 'red'
                    }}>About</NavLink>
                {/* <NavLink exact to="/contact"
                    activeStyle={{
                        fontWeight: 'bold',
                        color: 'red'
                    }}>Contact</NavLink> */}
                <NavLink exact to={{
                    pathname: '/contact',
                    hash: '#the-hash'
                }} activeStyle={{
                    fontWeight: 'bold',
                    color: 'red'
                }} >Contact</NavLink>
            </div>
        );
    }
}

export default Navigation;
