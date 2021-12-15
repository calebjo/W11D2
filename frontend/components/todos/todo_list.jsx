import React from 'react';
import TodoListItem from './todo_list_item'

// export default () => <h3>Todo List goes here!</h3>

export default class TodoList extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        // debugger
        return(
            <div>
            <ul>
                {this.props.todos.map((todo, idx) => <TodoListItem key={idx} todo={todo}/>)}
            </ul>
            < 
            </div>
        )
    }
}
