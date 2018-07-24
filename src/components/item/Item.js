import React, { Component } from 'react'
import './Item.css'
import classNames from 'classnames'

export default class Item extends Component {

    constructor(props) {
        super(props);

        this.state = {
            itemId: props.itemId
        }
        
        console.log("Constructor Item " + "content " + this.props.content + " completed " + this.props.completed + " id " + this.state.itemId);

    }

    // componentWillReceiveProps(props) {
    //     this.setState({
    //         completed:  props.completed,
    //         content:    props.content,
    //         id:         props.id
    //     });
    // }
    
    handleToggleButton = () => {
        console.log("Press ");
        //console.log("Render Item " + "content " + this.props.content + "|" + this.state.content + " completed " + this.props.completed + "|" + this.state.completed + " id " + this.props.id + "|" + this.state.id);

        
        // this.setState((prev, props) => {
        //     return {completed: !prev.completed};
        // });
        this.props.handleToggleItem(this.props.itemId);
    }

    handleDeteleButton = () => {
        console.log("Delete "+this.props.itemId);
        this.props.handleDeteleItem(this.props.itemId);
    }

    handleOnFocus = () => {
        // console.log(this.props.id);
    }

    render() {
        console.log("Render Item " + "content " + this.props.content + " completed " + this.props.completed + " id " + this.state.itemId);

        if( this.props.mode === 'all' || (this.props.mode === 'active' && !this.props.completed) || (this.props.mode === 'completed' && this.props.completed))
        {
            return (
                <div className='item' onFocus={this.handleOnFocus}>
                    <input className="toggle" type="checkbox" onClick={this.handleToggleButton} defaultChecked={this.props.completed}/>
                    <label className={classNames({completed: this.props.completed})}>{this.props.content}</label>
                    <button className="delete-item"><i className="fa fa-times" onClick={this.handleDeteleButton}></i></button>
                </div>
            );
        }
        else return (<div></div>);
    }
}
