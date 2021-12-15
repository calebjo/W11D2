import React from 'react';
import TodoListContainer from './todos/todo_list_container';
import TodoFormContainer from './todo_list/todo_form_container';

export default class App extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <TodoListContainer />
                {/* <TodoFormContainer /> */}
            </div>
        )
    }
}