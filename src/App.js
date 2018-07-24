import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Todo from './components/todo/Todo'
//import Router from 'director'

//import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// import {BrowserRouter, Switch, Route} from 'react-router-dom'

class App extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            mode: 'all'
        }

        // if(! ('mode' in props))
        // {
        //     console.log("mode doesnt exist !");
        //     this.setState({mode: 'all'});
        // }
        // else
        // {
        //     console.log("mode DOES exist !");
        // }
    }

    componentDidMount() {
        console.log('componentDidMount');
        console.log(this.props.match);

        const {url} = this.props.match;
        switch(url)
        {
            case '/':
            {
                this.setState({mode: 'all'});
                break;
            }

            case '/active':
            {
                this.setState({mode: 'active'});
                break;
            }

            case '/completed':
            {
                this.setState({mode: 'completed'});
                break;
            }
            
            default:
            {
                this.setState({mode: 'error'});
                break;
            }
        }
    }

    handleModeChange = (mode) => {
        this.setState({mode});
    }
    // handleDisplayMode = (mode) => {
    //     this.setState({mode});
    // }

    // setMode = (mode) => {
    //     this.setState({mode});
    // }

    // componentDidMount() {
    //     //var Router = require('director/build/director');
    //     var router = Router({
    //         '/': this.setState({mode: 'all'}),
    //         '/active': this.setState({mode: 'active'}),
    //         '/completed': this.setState({mode: 'completed'}),
    //     });
    //     router.init('/');
    // }


    render() {

        let body = this.state.mode === 'error'
                    ?   <Header title='404 NOT FOUND !'/> 
                    :   <div>
                            <Header title='todos' />
                            <div className='todo-footer'>
                                <Todo mode={this.state.mode}/>
                                <Footer handleModeChange={this.handleModeChange}/>
                            </div>
                        </div>

        return (    
            <div>{body}</div>         
        );
  }
}

export default App;

