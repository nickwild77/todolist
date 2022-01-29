import {Link} from 'react-router-dom'

const ProjectItem = ({project}) => {
    return (
        <tr>
            <td><Link to={`/projects/${project.id}/`}>{project.name} </Link></td>
            <td>{project.repository_link}</td>
            <td>{project.user}</td>
        </tr>
    )
}

const ProjectList = ({projects}) => {
    return (
        <center>
            <table border="1">
                <th>
                    Title
                </th>

                <th>
                    Link to repository
                </th>

                <th>
                    Users
                </th>
                {projects.map((project) => <ProjectItem project={project}/>)}

                <Link to='/projects/create'>Create</Link>

            </table>
        </center>
    )
}

export default ProjectList;