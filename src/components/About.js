import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className="container-fluid text-center">
                <div className="col-sm-8 text-left"> 
                    <h1>Welcome to About Page</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <hr/>

                    <h3>Test</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="col-sm-4 sidenav">
                    <div className="well">
                        <p>Ads</p>
                    </div>
                    <div className="well">
                        <p>Ads</p>
                    </div>
                    <div className="well">
                        <p>Ads</p>
                    </div>
                    <div className="well">
                        <p>Ads</p>
                    </div>
                </div>
            </div>
        )
    }
}
