import React from "react";
import {HashRouter, BrowserRouter, Route, Routes, Link, Navigate, useLocation} from 'react-router-dom'
import axios from "axios";
import './App.css';

import UserList from "./components/User";
import LoginForm from "./components/LoginForm";
import ToDosList from "./components/ToDos";
import ProjectsList, {ProjectDetail} from "./components/Projects";

const apiUrl = 'http://127.0.0.1:8000/api/';

const NotFound = () => {
    const location = useLocation()
    return (
        <div>Page {location.pathname} not found</div>
    )
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            previousUsersUrl: null,
            nextUsersUrl: null,
            userList: [],
            previousProjectsUrl: null,
            nextProjectsUrl: null,
            projectsList: [],
            previousToDosUrl: null,
            nextToDosUrl: null,
            toDoList: [],
            'token': '',
        };
    }

    get_token(login, password) {
        axios
            .post('http://127.0.0.1:8000/api-token-auth/', {"username": login, "password": password})
            .then(response => {
                const token = response.data.token
                console.log(token)
                localStorage.setItem('token', token)
                this.setState({
                    'token': token
                })
            })
            .catch(error => console.log(error))
    }

    logout() {
        localStorage.setItem('token', '')
        this.setState({
            'token': ''
        })
    }

    is_auth() {
        return !!this.state.token
    }

    loadUsers(url) {
        fetch(`${url}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                    "X-Requested-With": "XMLHttpRequest",
                },
            })
            .then((response) => {
                return response.json();
            })
            .then((request) => {
                const users = request.results;
                const previous = request.previous;
                const next = request.next;
                this.setState(
                    {
                        previousUsersUrl: previous,
                        nextUsersUrl: next,
                        userList: users,
                    }
                );
            })
            .catch(error => console.log(error));
    };

    loadToDo(url) {
        fetch(`${url}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                    "X-Requested-With": "XMLHttpRequest",
                },
            })
            .then((response) => {
                return response.json();
            })
            .then((request) => {
                const toDos = request.results;
                const previous = request.previous;
                const next = request.next;
                this.setState(
                    {
                        previousToDosUrl: previous,
                        nextToDosUrl: next,
                        toDoList: toDos,
                    }
                );
            }).catch(error => console.log(error));
    };


    loadProjects(url) {
        fetch(`${url}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                    "X-Requested-With": "XMLHttpRequest",
                },
            })
            .then((response) => {
                return response.json();
            })
            .then((request) => {
                const projectsList = request.results;
                const previous = request.previous;
                const next = request.next;
                this.setState(
                    {
                        previousProjectsUrl: previous,
                        nextProjectsUrl: next,
                        projectsList: projectsList,
                    }
                );
            })
            .catch(error => console.log(error));
    };

    componentDidMount() {
        const token = localStorage.getItem('token')
        this.loadUsers(`${apiUrl}users/`);
        this.loadToDo(`${apiUrl}todo/`);
        this.loadProjects(`${apiUrl}projects/`);
        this.setState({
            'token': token
        })
    }

    render() {
        return (
            <div>
                <HashRouter>
                    <nav>
                        <ul>
                            <li><Link to="/">Пользователи</Link></li>
                            <li><Link to="/projects">Проекты</Link></li>
                            <li><Link to="/todos">Задачи</Link></li>
                            <li>
                                {this.is_auth() ? <button onClick={() => this.logout()}> Выйти </button> :
                                    <Link to="/login">Войти</Link>}
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route exact path='/' element={<UserList users={this.state.userList}/>}/>
                        <Route exact path='/projects' element={<ProjectsList projectsList={this.state.projectsList}/>}/>
                        <Route exact path='/todos' element={<ToDosList toDosList={this.state.toDoList}/>}/>
                        <Route exact path='/login'
                               element={<LoginForm
                                   get_token={(login, password) => this.get_token(login, password)}/>}/>
                        <Route path="/users" element={<Navigate to="/"/>}/>
                        <Route path='/projects/:id'
                               element={<ProjectDetail projectsList={this.state.projectsList}/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </HashRouter>
            </div>
        )
    }
}

export default App;
