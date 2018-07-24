import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Todo from './components/todo/Todo'
import getNextId from './components/HandleId.js'


class App extends Component {

    constructor(props) {
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
            ],
            filter: 'all'
        }
    }

    handleToggleItem = (id) => {
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

        // console.log("Detele Old todos ");
        // oldTodos.forEach(i => console.log(i));

        oldTodos = oldTodos.filter(item => {
            return !id.includes(item.id);
        });

        this.setState({todos: [...oldTodos]});
        
        // console.log("Detele New todos ");
        // this.state.todos.forEach(i => console.log(i));
    }

    handleFilterChange = (filter) => {
        this.setState({filter});
    }

    getFilteredList = () => {
        return this.state.todos.filter(item => (this.state.filter === 'all') || (this.state.filter === 'active' && !item.completed) || (this.state.filter === 'completed' && item.completed));
    }

    getRemainingNumber = () => {
        let number = 0;
        this.state.todos.forEach((item) => {
            if(!item.completed) number += 1;
        });
        return number;
    }

    clearCompletedItems = () => {
        let todos = this.state.todos.filter((item) => !item.completed);
        this.setState({todos});
    }

    areAllFinished = () => {
        let status = true;
        this.state.todos.forEach((item) => {
            status = status && item.completed;
        });

        return status;
    }

    handleToggleAll = (status) => {
        let todos = Object.assign([], this.state.todos);
        todos.forEach((item) => {
            item.completed = status;
        });
        
        this.setState({todos});
    }

    componentDidMount() {
        const {url} = this.props.match;
        switch(url)
        {
            case '/':
            {
                this.setState({filter: 'all'});
                break;
            }
            case '/active':
            {
                this.setState({filter: 'active'});
                break;
            }
            case '/completed':
            {
                this.setState({filter: 'completed'});
                break;
            }
            default:
            {
                this.setState({filter: 'error'});
                break;
            }
        }
    }
    
    render() {

        let filteredList = this.getFilteredList();
        let remaining = this.getRemainingNumber();
        let completed = this.state.todos.length - remaining;

        let allFinished = this.areAllFinished();

        let footer = this.state.todos.length !== 0 ? <Footer handleFilterChange={this.handleFilterChange} clearCompletedItems={this.clearCompletedItems} completed={completed} remaining={remaining}/> : null;

        let body = this.state.filter === 'error'
                    ?   <Header title='404 NOT FOUND !'/> 
                    :   <div>
                            <Header title='todos' />
                            <div className='todo-footer'>
                                <Todo todos={filteredList} handleToggleItem={this.handleToggleItem} handleInsertItem={this.handleInsertItem} handleDeteleItem={this.handleDeteleItem} handleToggleAll={this.handleToggleAll} allFinished={allFinished}/>
                                {footer}
                            </div>
                        </div>

        return (    
            <div>{body}</div>         
        );
  }
}

export default App;

