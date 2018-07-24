import React, { Component } from 'react'
import './Item.css'
import classNames from 'classnames'

export default class Item extends Component {

    constructor(props) {
        super(props);

        this.state = {
            itemId: props.itemId
        }
    }

    // componentWillReceiveProps(props) {
    //     this.setState({
    //         completed:  props.completed,
    //         content:    props.content,
    //         id:         props.id
    //     });
    // }
    
    handleToggleButton = () => {
        this.props.handleToggleItem(this.props.itemId);
    }

    handleDeteleButton = () => {
        this.props.handleDeteleItem(this.props.itemId);
    }

    handleOnFocus = () => {
        // console.log(this.props.id);
    }

    render() {
        console.log('item ' + this.props.itemId + ' ' + this.props.completed);
        // if( this.props.mode === 'all' || (this.props.mode === 'active' && !this.props.completed) || (this.props.mode === 'completed' && this.props.completed))
        // {
            return (
                <div className='item' onFocus={this.handleOnFocus}>
                    <input className="toggle" type="checkbox" onChange={this.handleToggleButton} checked={this.props.completed}/>
                    <label className={classNames({completed: this.props.completed})}>{this.props.content}</label>
                    <button className="delete-item"><i className="fa fa-times" onClick={this.handleDeteleButton}></i></button>
                </div>
            );
        // }
        // else return (<div></div>);
    }
}
