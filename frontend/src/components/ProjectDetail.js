import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import ProjectItem from "./ProjectsList";


function ProjectDetails({projects, deleteProject}) {
    const {id} = useParams();

    const filteredProjects = projects.filter(project => project.user.includes(parseInt(id)));

    function renderProjectItem(project) {
        return <ProjectItem key={project.id} project={project} deleteProject={deleteProject}/>;
    }

    return (
        <center>
            <table border="1">
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Link to repository</th>
                    <th>Creator</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>{filteredProjects.map(renderProjectItem)}</tbody>
            </table>
        </center>
    );
}

export default ProjectDetails;
