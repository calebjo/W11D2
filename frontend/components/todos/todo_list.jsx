import React from 'react';

// export default () => <h3>Todo List goes here!</h3>

export default class TodoList extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <ul>
                {this.props.todos.map((todo, idx) => <li key={idx}>{todo.title}</li>)}
            </ul>
        )
    }
}
