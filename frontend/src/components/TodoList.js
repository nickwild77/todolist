import {Link} from "react-router-dom";

const TodoItem = ({todo, deleteTodo}) => {
    return (
        <tr>
            <td>{todo.project}</td>
            <td>{todo.title}</td>
            <td>{todo.body}</td>
            <td>{todo.creator}</td>
            <td>
                <button onClick={() => deleteTodo(todo.id)} type="button">Delete</button>
            </td>
        </tr>

    )
}


const TodoList = ({todo, deleteTodo}) => {
    return (
        <center>
            <table border="1">
                <th>
                    Project
                </th>
                <th>
                    Title
                < /th>
                <th>
                    Text
                </th>
                <th>
                    Creator
                </th>
                {todo.map((todo) => <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo}/>)}
                <th>
                    <Link to="/todo/create">Create</Link>
                </th>
            </table>
        </center>

    )
}

export default TodoList;