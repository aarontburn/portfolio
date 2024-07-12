import { openLink } from "../components/Components";
import { ProjectDatabase, ProjectDetails, TechnologyStack } from "../components/ProjectDatabase";
import "./css/ProjectDetails.css"

import { useParams } from "react-router-dom";


export function ProjectDetailsPage(props: any) {

    const id = useParams().id as string;

    const project: ProjectDetails = ProjectDatabase.getProjectByID(id) as ProjectDetails;
    const stack: TechnologyStack = project.stack;

    return <div className="page" id="project-details-page">
        <div id="project-details-body">
            <div id="left">

                <img src={project.image} style={{ width: '100%' }} />
                <h1 style={{ fontSize: '50px' }}>{project.name}</h1>
                <p onClick={() => openLink(project.repoLink)} style={{ color: 'blue', cursor: 'pointer' }}>
                    {project.repoLink || ''}
                </p>

                <br />
                <p>{project.desc}</p>
                <br />
                <BoldSectionHeader>Technology Stack</BoldSectionHeader>
                <br />


                <TechnologySection name="Languages: " items={stack.languages} />
                <TechnologySection name="Frameworks/Libraries: " items={stack.frameworksOrLibraries} />
                <TechnologySection name="Technologies: " items={stack.technologies} />
                <TechnologySection name="Others: " items={stack.others} />
            </div>

            <div id="right">
                <BoldSectionHeader>Summary:</BoldSectionHeader>
                <br />
                <h3>{project.longDesc ?? project.desc}</h3>
                <br />

                <BoldSectionHeader>Features:</BoldSectionHeader>
                <br />
                <h3>{project.features ?? ''}</h3>
            </div>
        </div>

    </div>
}

function BoldSectionHeader(props: any) {
    return <h1 style={{ fontWeight: 550, fontSize: props.fontSize ?? 32 }}>{props.children}</h1>
}

function TechnologySection({ name, items }: { name: string, items: string[] | undefined }) {
    if (items === undefined) {
        return <></>
    }

    return <div>
        <BoldSectionHeader fontSize={20}>{name}</BoldSectionHeader>
        <p style={{ marginLeft: "1em" }}>
            {items.join(", ")}
        </p>
        <br />
    </div>

}