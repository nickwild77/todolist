import React from 'react'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'login': '',
            'password': ''
        }
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        this.props.get_token(this.state.login, this.state.password)
        event.preventDefault()
    }

    render() {
        return (

            <center>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input type="text" name="login" placeholder="Логин" value={this.state.login}
                           onChange={(event) => this.handleChange(event)}/>
                    <input type="password" name="password" placeholder="Пароль" value={this.state.password}
                           onChange={(event) => this.handleChange(event)}/>
                    <input type="submit" value="Войти"/>
                </form>
            </center>
        )
    }
}

export default LoginForm;