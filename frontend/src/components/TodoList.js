import {Link} from "react-router-dom";

const TodoItem = ({todo}) => {
    return (
        <tr>
            <td>{todo.title}</td>
            <td>{todo.body}</td>
            <td>{todo.project}</td>
            <td>{todo.creator}</td>
        </tr>
    )
}


const TodoList = ({todo, deleteTodo}) => {
    return (
        <center>
            <table border="1">
                <th>
                    Title
                < /th>
                <th>
                    Text
                </th>
                <th>
                    Project
                </th>
                <th>
                    Creator
                </th>
                {todo.map((todo) => <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo}/>)}
                <Link to="/todo/create">Create</Link>
            </table>
        </center>

    )
}

export default TodoList;