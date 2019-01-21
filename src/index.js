import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< Updated upstream
// import './index.css';

=======
>>>>>>> Stashed changes
import App from './App';
import{Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './Reducers';
import promiseMiddleware from 'redux-promise'; 
import 'bootstrap/dist/css/bootstrap.min.css';


const store= applyMiddleware(promiseMiddleware)(createStore)
ReactDOM.render(
    <Provider store={store(rootReducer)}>
        <App/>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

