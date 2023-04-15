import React from 'react'

class ProjectForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            repository_link: '',
            users: []
        }
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }


    handleUsersChange(event) {
        let selectedOptions = event.target.selectedOptions
        if (selectedOptions) {
            let users = [];
            for (let i = 0; i < selectedOptions.length; i++) {
                users.push(+selectedOptions.item(i).value);
            }

            this.setState({
                users: users
            });
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.name)
        console.log(this.state.repository_link)
        console.log(this.state.users)
        this.props.createProject(
            this.state.name,
            this.state.repository_link,
            this.state.users)

    }

    render() {
        return (
            <center>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <div className="form-group">
                        <label htmlFor="name">name</label>
                        <input type="text" className="form-control" name="name"
                               value={this.state.name} onChange={(event) => this.handleChange(event)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="repository_link">repository</label>
                        <input type="text" className="form-control" name="repository_link"
                               value={this.state.repository_link} onChange={(event) => this.handleChange(event)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="user">user</label>
                        <select
                            multiple
                            required
                            name="users"
                            onChange={event => this.handleUsersChange(event)}
                        >
                            {this.props.users.map(users => {
                                if (this.state.users.length > 0 && this.state.users.includes(users.id)) {
                                    return <option selected key={users.id} value={users.id}>
                                        {`${users.username}`}
                                    </option>
                                }
                                return <option key={users.id} value={users.id}>
                                    {`${users.username}`}
                                </option>
                            })}
                        </select>
                    </div>
                    <input type="submit" className="btn btn-primary" value="Save"/>
                </form>
            </center>
        )
    }
}

export default ProjectForm