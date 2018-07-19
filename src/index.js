import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

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

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();