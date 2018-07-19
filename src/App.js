import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Todo from './components/todo/Todo'

// import {BrowserRouter, Switch, Route} from 'react-router-dom'

class App extends Component {

  render() {
    return (
        <div>
            <Header />
            <div className='todo-footer'>
                <Todo />
                <Footer />
            </div>
        </div>     
    );
  }
}

export default App;

