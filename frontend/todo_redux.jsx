import React from 'react';
import ReactDOM from 'react-dom';
import { receiveTodos, receiveTodo, removeTodo } from './actions/todo_actions';
import { receiveSteps, receiveStep, removeStep } from './actions/step_actions';
import configureStore from './store/store';
import Root from './components/root.jsx';
import allTodos from './reducers/selectors.js'

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    ReactDOM.render(<Root store={store}/>, document.getElementById('content'));
    window.store = store;
    window.removeTodo = removeTodo;
    window.receiveTodos = receiveTodos;
    window.receiveTodo = receiveTodo;

    window.removeStep = removeStep;
    window.receiveSteps = receiveSteps;
    window.receiveStep = receiveStep;

    window.allTodos = allTodos;
});