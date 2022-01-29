import {useParams} from 'react-router-dom'

const ProjectItem = ({project}) => {
    return (
        <tr>
            <td>{project.name}</td>
            <td>{project.repositoryLink}</td>
            <td>{project.user}</td>
        </tr>
    )
}

const ProjectDetails = ({projects, deleteProject}) => {
    let {id} = useParams();
    let filteredProjects = projects.filter((project) => project.user.includes(parseInt(id)))

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
                    Creator
                </th>
                {filteredProjects.map((project) => <ProjectItem project={project}/>)}
            </table>
        </center>
    )
}

export default ProjectDetails;