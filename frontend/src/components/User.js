import React from 'react';


const UserItem = ({user}) => {
    return (
        <tr>
            <td>
                {user.username}
            </td>
            <td>
                {user.firstName}
            </td>
            <td>
                {user.lastName}
            </td>
            <td>
                {user.email}
            </td>
        </tr>
    );
};

const UsersList = ({users, previousPage, nextPage, load}) => {
    return (
        <div>
            <p>
                {previousPage && <button onClick={() => load(previousPage)}>previous page</button>}
                {nextPage && <button onClick={() => load(nextPage)}>next page</button>}
            </p>
            <table>
                <thead>
                <tr>
                    <th>
                        Пользователь
                    </th>
                    <th>
                        Имя
                    </th>
                    <th>
                        Фамилия
                    </th>
                    <th>
                        Email
                    </th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => <UserItem key={user.id} user={user}/>)}
                </tbody>
            </table>
        </div>
    );
};


export default UsersList;
