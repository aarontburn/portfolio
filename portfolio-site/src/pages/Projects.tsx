import { ProjectDatabase, ProjectDetails } from '../components/ProjectDatabase'
import './css/Projects.css'


export function Projects({ changePage }: { changePage: (path: string) => void }) {
    return <>
        <div className="page" id='projects-page'>
            <div id='projects-body'>
                <h1 style={{ fontSize: '4em' }}>Projects</h1>
                <div id='project-container'>
                    <div className='project-nav'>
                        <h1>{'<'}</h1>
                    </div>
                    {ProjectDatabase.getProjects().map(project => <Project key={project.id} changePage={changePage} details={project} />)}
                </div>
            </div>
        </div>
    </>
}




function Project({ changePage, details }: { changePage: (path: string) => void, details: ProjectDetails }) {
    return <div style={{ display: 'inline-block' }}>
        <div className='project'>
            <img src={details.image} alt={`Project '${details.name}' image.`} />
            <h1 className='project-name'>{details.name}</h1>

            <br />
            <p className='project-desc'>{details.desc}</p>
            <br />
            <div className='details-link'>
                <p onClick={() => changePage("/projects/" + details.id)}>More Details</p>
            </div>
        </div>
    </div>


}