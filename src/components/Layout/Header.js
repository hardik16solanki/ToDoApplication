import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <h1 className="header">
                TodoList
                <div className="nav-links">
                    <Link to="/home" className="link">Home</Link>
                    <span> | </span>
                    <Link to="/about" className="link">About</Link>
                </div>
            </h1>
        )
    }
}
