import React from 'react';
import TodoListItem from './todo_list_item'
import TodoForm from '../todo_list/todo_form.jsx'

class TodoList extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        debugger
        const { todos, receiveTodo } = this.props;
        return(
            <div>
                <ul>
                {this.props.todos.map((todo, idx) => <TodoListItem key={idx} todo={todo}/>)}
                </ul>
                <TodoForm receiveTodo={ receiveTodo }/>
            </div> 
        )
    }
}

export default TodoList;
