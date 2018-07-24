import React, { Component } from 'react'
import './Todo.css'

import Item from '../item/Item'

import getNextId from '../HandleId.js'



// import {withRouter} from 'react-router-dom';
// const SomeComponent = withRouter(props => <Todo {...props}/>);


export default class Todo extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            todos: [
                {
                    id: getNextId(),
                    content: '1',
                    completed: false
                },
                {
                    id: getNextId(),
                    content: '2',
                    completed: true
                },
                {
                    id: getNextId(),
                    content: '3',
                    completed: false
                },
                {
                    id: getNextId(),
                    content: '4',
                    completed: false
                }
            ]
        }
    
        //this.handleDeteleItem = this.handleDeteleItem.bind(this);
        // this.handleToggleItem = this.handleToggleItem.bind(this);
        //this.handleInsertItem = this.handleInsertItem.bind(this);
        //this.getNextUniqueId = this.getNextUniqueId.bind(this);
    }

    // getNextId = () => {
    //     console.log(this.currentId);
    // }

    
    handleToggleItem = (id) => {
        console.log('Toggled');
        const index = this.state.todos.findIndex((item) => {return item.id === id});

        let todos = Object.assign([], this.state.todos);

        const item = Object.assign({}, this.state.todos[index]);

        item.completed = !item.completed;

        todos.splice(index, 1, item);

        this.setState({todos});
    }

    handleInsertItem = (item) => {
       
        item.id = getNextId();
        console.log(item);
        const todos = Object.assign([], this.state.todos);
        todos.push(item);
        this.setState({todos});
    }

    handleDeteleItem = (...id) => {
        let oldTodos = Object.assign([], this.state.todos);

        console.log("Detele Old todos ");
        oldTodos.forEach(i => console.log(i));

        oldTodos = oldTodos.filter(item => {
            return !id.includes(item.id);
        });

        this.setState({todos: [...oldTodos]});
        
        console.log("Detele New todos ");
        this.state.todos.forEach(i => console.log(i));
    }

    // handleInputChange = (e) => {
    //     this.setState({
    //         input: e.target.value
    //     })

    // }

    handleKeyDown = (e) => {
        //e.preventDefault();
        if(e.keyCode === 13) {

            if(e.target.value === "") return false;

            let newItem = {
                content: e.target.value,
                completed: false
            }

            this.handleInsertItem(newItem);
            //this.setState({input: ''});
            e.target.value = '';
        }   
        console.log("onKeyDown " + e.target.value);
        // const {pathname} = this.props.location;
        // console.log(pathname);
    }

    // ListItems = () => {
    //     let listItems = this.state.todos.map((item, index) => <Item content={item.content} completed={item.completed} itemId={item.id} key={item.id} handleDeteleItem={this.handleDeteleItem}/>);
    //     return listItems;
    // }

    render() {
        // console.log("Render todos...");
        // console.log("...todos ");
        // this.state.todos.forEach(i => console.log(i));

        let listItems = this.state.todos.map((item, index) => {
             return <Item content={item.content} completed={item.completed} itemId={item.id} key={item.content} handleDeteleItem={this.handleDeteleItem} handleToggleItem={this.handleToggleItem} mode={this.props.mode}/>
        });
        //listItems.map(item => console.log(item));

        return (
            <div className='bound-input'>
                <div className='new-todo'>
                    <input className='new-todo-input' placeholder='What needs to be done ?' onKeyDown={this.handleKeyDown}/>
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
