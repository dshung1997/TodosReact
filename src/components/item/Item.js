import React, { Component } from 'react'
import './Item.css'
import classNames from 'classnames'

export default class Item extends Component {

    constructor(props) {
        super(props);

        // this.state = {
        //     completed:  props.completed,
        //     content:    props.content,
        //     id:         props.id
        // }

        console.log("Item " + "content " + props.content + "|" + this.props.content + " completed " + props.completed + "|" + this.props.completed + " id " + props.id + "|" + this.props.id);
    }
    
    handleToggleItem = () => {
        console.log("Press ");
        console.log("Item " + "content " + this.props.content + "|" + this.props.content + " completed " + this.props.completed + "|" + this.props.completed + " id " + this.props.id + "|" + this.props.id);

        this.setState((prev, props) => {
            return {completed: !prev.completed};
        });
    }

    handleDeteleButton = () => {
        console.log("Delete "+this.props.id);
        this.props.handleDeteleItem(this.props.id);
    }

    handleOnFocus = () => {
        // console.log(this.props.id);
    }

    render() {
        // this.setState({
        //     completed:  this.props.completed,
        //     content:    this.props.content,
        //     id:         this.props.id
        // });

        return (
            <div className='item' onFocus={this.handleOnFocus}>
                <input className="toggle" type="checkbox" onClick={this.handleToggleItem} defaultChecked={this.props.completed}/>
                <label className={classNames({completed: this.props.completed})}>{this.props.content}</label>
                <button className="delete-item"><i className="fa fa-times" onClick={this.handleDeteleButton}></i></button>
            </div>
        )
    }
}
