import React from 'react';

class TodoForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id: Math.floor(Math.random() * 100000),
            title: "",
            body: "",
            done: false
        }
        this.updateTitle = this.updateTitle.bind(this)
        this.updateBody = this.updateBody.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateTitle(e){
        this.setState({title: e.target.value})
    }

    updateBody(e){
        this.setState({body: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.receiveTodo(this.state)
        this.setState({
            id: Math.floor(Math.random() * 100000),
            title: "",
            body: ""
        });
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>Add Todo</h1>
                <label>Title
                    <input 
                    type="text"
                    value={this.state.title}
                    onChange={this.updateTitle} />
                </label>
                <label>Description
                    <input 
                    type="text"
                    value={this.state.body}
                    onChange={this.updateBody} />
                </label>
                <input type="submit" value="Add Todo"/>
            </form>
        )
    }
}

export default TodoForm;