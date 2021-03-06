import { connect } from 'react-redux';
import TodoForm from './todo_form.jsx';
import { receiveTodo } from '../../actions/todo_actions.js';

const mapStateToProps = state => ({
    todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
    receiveTodo: todo => dispatch(receiveTodo(todo))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoForm);