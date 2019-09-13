import React from 'react';
import logo from '../assets/images/logo.svg';

export class TopBar extends React.Component {
    render() {
        return (
            <div className="TopNavBar">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
            </div>
        );
    }
}