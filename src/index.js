import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
// import './style/index.css';
import App from './containers/visibleHomework'
import * as serviceWorker from './serviceWorker'
import reducer from "./reducers/reducer"
import {createStore} from 'redux'
import initialState from "./data/initialState";

let store=createStore(reducer,initialState);


console.log('store:',store.getState());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.register();

let url='http://localhost:8080/index.html';
fetch(url)
    .then((res)=>{
        return res.json();
})
    .then((data)=>{
        console.log('data:',data);
    })
    .catch((err)=>{
        console.log('Error:',err);
    });