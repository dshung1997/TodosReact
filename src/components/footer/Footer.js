import React, { Component } from 'react'
import './Footer.css'
import {BrowserRouter as Router, NavLink} from 'react-router-dom'

export default class Footer extends Component {

    handleFilterChange = (e) => {
        let filter = e.target.text.toLowerCase();
        this.props.handleFilterChange(filter);
    }

  render() {
    let number = this.props.remaining;
    let text = number === 1 ? 'item' : 'items';

    let hidden = !(this.props.completed > 0);
    
    return (
        <Router>
            <div className='footer'>
                <span className='todos-info'>
                    <span className='number-items'>{number}</span>
                    <span className='object-items'>{text}</span>
                    <span>left</span>
                </span>

                <ul className='filters'>
                    <li> 
                        <NavLink to='/' exact activeClassName='selected' onClick={this.handleFilterChange}>All</NavLink>
                    </li>

                    <li> 
                        <NavLink to='/active' exact activeClassName='selected' onClick={this.handleFilterChange}>Active</NavLink>
                    </li>

                    <li> 
                        <NavLink to='/completed' exact activeClassName='selected' onClick={this.handleFilterChange}>Completed</NavLink>
                    </li>
                </ul>

                <button className='clear-completed' onClick={this.props.clearCompletedItems} disabled={hidden}>Clear completed</button>
            </div>
        </Router>
    )
  }
}
