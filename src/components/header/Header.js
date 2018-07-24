import React, { Component } from 'react'
import './Header.css';

export default class Header extends Component {
  render() {
    let text = this.props.title;

    return (
        <div className='title'>
            <p>
                {text}
            </p>
        </div>
    )
  }
}
