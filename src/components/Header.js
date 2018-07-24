import React, { Component } from 'react'
import Title from './Title'

export default class Header extends Component {

    handleChange = (e) => {
        const text = e.target.value;
        this.props.changeTitle(text);
    }

  render() {

    let todos = [
        {
            a: '1',
            b: '2',
        },
        {
            a: '11',
            b: '22',
        }
    ]

    let hihi = Object.assign([], todos);
    hihi[0].a = '55';


    return (
      <div>
        <Title title={this.props.title}/>
        <input value={this.props.title} onChange={(e) => this.handleChange(e) } />
      </div>
    )
  }

  
}


