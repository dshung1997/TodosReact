import React, { Component } from 'react'
import './Todo.css'

import Item from '../item/Item'

export default class Todo extends Component {
    handleKeyDown = (e) => {
        if(e.keyCode === 13) {

            if(e.target.value === "") return false;

            let newItem = {
                content: e.target.value,
                completed: false
            }

            this.props.handleInsertItem(newItem);
            e.target.value = '';
        }   
        console.log("onKeyDown " + e.target.value);
    }

    toggleAll = (e) => {
        let status = e.target.checked;
        this.props.handleToggleAll(status);
    }


    render() {
        let listItems = this.props.todos.map((item, index) => {
             return <Item content={item.content} completed={item.completed} itemId={item.id} key={item.id} handleDeteleItem={this.props.handleDeteleItem} handleToggleItem={this.props.handleToggleItem} />
        });
   
        return (
            <div className='bound-input'>
                <div className='new-todo'>
                    <input className='new-todo-input' placeholder='What needs to be done ?' onKeyDown={this.handleKeyDown}/>
                </div>

                <input className="toggle-all" type="checkbox" defaultChecked={this.props.allFinished} onClick={this.toggleAll}/>

                <div>
                    <ul className='todo-list'>
                        {listItems}
                    </ul>   
                </div>
            </div>
        )
    }
}
