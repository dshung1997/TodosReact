import React, { Component } from 'react'
import './Footer.css'
import {BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'

export default class Footer extends Component {

    handleModeChange = (e) => {
        let mode = e.target.text.toLowerCase();
        this.props.handleModeChange(mode);
    }

  render() {
    return (
        <Router>
            <div className='footer'>
                <span className='todos-info'>
                    <span className='number-items'>1</span>
                    <span className='object-items'>item</span>
                    <span>left</span>
                </span>

                <ul className='filters'>
                    <li> 
                        <NavLink to='/' exact activeClassName='selected' onClick={this.handleModeChange}>All</NavLink>
                    </li>

                    <li> 
                        <NavLink to='/active' exact activeClassName='selected' onClick={this.handleModeChange}>Active</NavLink>
                    </li>

                    <li> 
                        <NavLink to='/completed' exact activeClassName='selected' onClick={this.handleModeChange}>Completed</NavLink>
                    </li>
                </ul>

                <button className='clear-completed'>Clear completed</button>
            </div>
        </Router>
    )
  }
}
