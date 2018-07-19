import React, { Component } from 'react'
import Title from './Title'

export default class Header extends Component {

    handleChange = (e) => {
        const text = e.target.value;
        this.props.changeTitle(text);
    }

  render() {
    return (
      <div>
        <Title title={this.props.title}/>
        <input value={this.props.title} onChange={(e) => this.handleChange(e) } />
      </div>
    )
  }
}
