import React from 'react';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {body: '', project: 1, user: 1,}
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        console.log(this.state.body)
        console.log(this.state.project)
        console.log(this.state.creator)
        this.props.createTodo(this.state.body, this.state.project, this.state.creator)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className="form-group">
                    <label for="text">text</label>
                    <input type="text" className="form-control" name="body"
                           value={this.state.body} onChange={(event) => this.handleChange(event)}/>
                </div>
                <div className="form-group">
                    <label for="project">project</label>
                    <select name="project" className='form-control'
                            onChange={(event) => this.handleChange(event)}>
                        {this.props.projects.map((item) => <option
                            value={item.id}>{item.name}</option>)}
                    </select>
                </div>
                <input type="submit" className="btn btn-primary" value="Save"/>
            </form>
        )

    }
}

export default TodoForm