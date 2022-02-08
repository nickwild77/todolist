import {Link} from 'react-router-dom'

const ProjectItem = ({project, deleteProject}) => {
    return (
        <tr>
            <td><Link to={`/projects/${project.id}/`}>{project.name} </Link></td>
            <td>{project.repositoryLink}</td>
            <td>{project.user}</td>
            <td>
                <button onClick={() => deleteProject(project.id)} type="button">Delete</button>
            </td>
        </tr>
    )
}

const ProjectList = ({projects, deleteProject}) => {
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
                {projects.map((project) => <ProjectItem project={project} deleteProject={deleteProject}/>)}

                <Link to='/projects/create'>Create</Link>

            </table>
        </center>
    )
}

export default ProjectList;