import React from 'react';

const TodoListItem = (props, idx) => {
    return(
        <li>{props.todo.title}</li>
    )
}

export default TodoListItem;
    
