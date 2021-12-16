import React from 'react';
import ReactDOM from 'react-dom';
import { receiveTodos, receiveTodo, removeTodo } from './actions/todo_actions';
import { receiveSteps, receiveStep, removeStep } from './actions/step_actions';
import configureStore from './store/store';
import Root from './components/root.jsx';
import allTodos from './reducers/selectors.js'
import fetchTodos from './util/todo_api_util.js';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    ReactDOM.render(<Root store={store}/>, document.getElementById('root'));

    window.fetchTodos = fetchTodos;

    window.store = store;
    store.dispatch((dispatch) => {
        console.log('If this prints out, the thunk middleware is working!')
    });
});