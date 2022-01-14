import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Home extends Component {
    render() {
        return (
            <div>
                <center>
                    <h1>Welcome to <Link className="link-without-border" to="/">CHATTY</Link></h1>
                    <Link className="link-without-border btn btn-outline-info" to="/login">Login</Link>
                </center>
                
            </div>
        )
    }
}
