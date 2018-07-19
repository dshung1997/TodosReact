import React, { Component } from 'react'
import './Todo.css'

import Item from '../item/Item'

export default class Todo extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            todos: [
                {
                    content: '1',
                    completed: false
                },
                {
                    content: '2',
                    completed: true
                },
                {
                    content: '3',
                    completed: false
                },
                {
                    content: '4',
                    completed: false
                }
            ]
        }
    
        this.handleDeteleItem = this.handleDeteleItem.bind(this);
        // this.handleToggleItem = this.handleToggleItem.bind(this);
        // this.handleInsertItem = this.handleInsertItem.bind(this);
    }

    
    handleToggleItem = () => {
        console.log('Toggled');
    }

    handleInsertItem = (item) => {
        this.setState( (prev, props) => {
        return {todos: prev.todos.push(item)}
        } )
    }

    handleDeteleItem = (index) => {
        let oldTodos = this.state.todos;

        console.log("Old todos ");
        oldTodos.forEach(i => console.log(i));

        oldTodos.splice(index, 1);
        this.setState({todos: [...oldTodos]});
        
        console.log("New todos ");
        this.state.todos.forEach(i => console.log(i));
    }

    ListItems = () => {
        let listItems = this.state.todos.map((item, index) => <Item content={item.content} completed={item.completed} id={index} key={index} handleDeteleItem={this.handleDeteleItem}/>);
        return listItems;
    }

    render() {
        console.log("Render todos...");
        console.log("...todos ");
        this.state.todos.forEach(i => console.log(i));

        let listItems = this.state.todos.map((item, index) => {
             return <Item content={item.content} completed={item.completed} id={index} key={index} handleDeteleItem={this.handleDeteleItem}/>
        });
        listItems.map(item => console.log(item));

        return (
            <div className='bound-input'>
                <div className='new-todo'>
                    <input className='new-todo-input' placeholder='What needs to be done ?'/>
                </div>

                <input className="toggle-all" type="checkbox" checked=""/>

                <div>
                    <ul className='todo-list'>
                        {/* <Item content='hihi' handleDeteleItem={this.handleDeteleItem}/> */}
                        {listItems}
                    </ul>   
                </div>
            </div>
        )
    }
}
