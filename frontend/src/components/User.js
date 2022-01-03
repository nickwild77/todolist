import React from 'react';


const UserItem = ({user}) => {
    return (
        <tr>
            <td>
                {user.id}
            </td>
            <td>
                {user.username}
            </td>
            <td>
                {user.first_name}
            </td>
            <td>
                {user.last_name}
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
                        ID
                    </th>
                    <th>
                        Username
                    </th>
                    <th>
                        First name
                    </th>
                    <th>
                        Last Name
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
