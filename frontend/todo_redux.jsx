import React from 'react';
import ReactDOM from 'react-dom';
import { receiveTodos, receiveTodo, removeTodo } from './actions/todo_actions';
import { receiveSteps, receiveStep, removeStep } from './actions/step_actions';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<h1>Hello!</h1>, document.getElementById('content'));
    const store = configureStore();
    window.store = store;
    window.removeTodo = removeTodo;
    window.receiveTodos = receiveTodos;
    window.receiveTodo = receiveTodo;

    window.removeStep = removeStep;
    window.receiveSteps = receiveSteps;
    window.receiveStep = receiveStep;
});