import React from 'react';
import ReactDOM from 'react-dom';
import { receiveTodos, receiveTodo } from './actions/todo_actions';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<h1>Hello!</h1>, document.getElementById('content'));
    const store = configureStore();
    window.store = store;
    window.receiveTodos = receiveTodos;
    window.receiveTodo = receiveTodo;
});