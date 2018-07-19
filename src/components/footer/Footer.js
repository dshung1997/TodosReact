import React, { Component } from 'react'
import './Footer.css'
import {BrowserRouter as Router, NavLink } from 'react-router-dom'

export default class Footer extends Component {
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
                        <NavLink to='/' className='selected'>All</NavLink>
                    </li>

                    <li> 
                        <NavLink to='/active'>Active</NavLink>
                    </li>

                    <li> 
                        <NavLink to='/completed'>Completed</NavLink>
                    </li>
                </ul>

                <button className='clear-completed'>Clear completed</button>
            </div>


        </Router>
    )
  }
}
