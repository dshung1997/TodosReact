import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// ReactDOM.render(
//     <BrowserRouter>
//         <div>
//             <Switch>
//                 <Route path='/' exact />
//                 <Route path='/active' exact />
//                 <Route path='/completed' exact />
//             </Switch>
            
//             <App />
//         </div>  

//     </BrowserRouter>
//     , document.getElementById('root'));
// registerServiceWorker();

const AppComponent = ({match}) => {

    console.log('match');
    console.log(match);
    if(match.url === '/')
    {
        return <App mode='all' />
    }
    else if(match.url === '/active')
    {
        return <App mode='active' />
    }

    return <App mode='completed'/>
    // return <h1>Error</h1>;
    
}

ReactDOM.render(
       <BrowserRouter>
            <Switch>
                {/* <IndexRoute component={AppComponent} /> */}
                <Route path='*' exact component={App}/>
                {/* <Route path="/:mode" exact component={AppComponent}/> */}
                {/* <Route path="/completed" exact component={<App mode='completed' />}/> */}
            </Switch>
       </BrowserRouter>
    // <App mode='all'/>
   , document.getElementById('root'));
registerServiceWorker();