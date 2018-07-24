import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

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