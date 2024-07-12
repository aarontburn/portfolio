import placeholderImage from '../res/placeholder_image.png';
import modulesImage from '../res/modules.png';
import { List, openLink } from './Components';

export interface ProjectDetails {
    id: string,
    name: string,
    desc: string,
    image: string,
    stack: TechnologyStack
    longDesc?: string | React.ReactNode,
    features?: string | React.ReactNode,
    repoLink?: string

}

export interface TechnologyStack {
    languages?: string[],
    frameworksOrLibraries?: string[],
    technologies?: string[],
    others?: string[]
}

const Bold = (props: any) => <span style={{ fontWeight: 550 }}>{props.children}</span>;
const Italic = (props: any) => <span style={{ fontStyle: "italic" }}>{props.children}</span>


const projects: ProjectDetails[] = [
    {
        id: 'modules',
        name: "Modules",
        desc: "Cross-platform desktop to enable to creation and installation of Node.js plugins.",
        image: modulesImage,
        repoLink: 'https://github.com/aarontburn/modules',
        stack: {
            languages: ["JavaScript", "TypeScript", "HTML", "CSS"],
            frameworksOrLibraries: ["Electron.JS", "Node.JS"],
            technologies: ["Git/GitHub"]
        },
        longDesc: <p>
            <Bold>Modules</Bold> is a platform for both developers and users
            to install and create <Italic>Node.JS</Italic> plugins, called a <Italic>module</Italic>.

            Unlike other widgetable applications, <Bold>Modules</Bold> was built with the idea
            that anything that could be made using <Italic>Node.JS</Italic> could be turned into
            a <Italic>module</Italic> and be able to be housed within a single application.
            <br />
        </p>,
        features: <>
            <ul className='features-list'>
                <List text='Streamlined developer API'>
                    <li>Includes scripts and tools to export modules.</li>
                    <List text={<>Includes <Italic>Module</Italic> boilerplate repository.</>}>
                        <p
                            style={{ color: 'blue', cursor: 'pointer' }}
                            onClick={() => openLink('https://github.com/aarontburn/modules-module-quickstart')}>
                            https://github.com/aarontburn/modules-module-quickstart
                        </p>
                    </List>
                    <List text='Inter-Module Communication (IMC)'>
                        <li>
                            A <Italic>module</Italic> can expose an API that can be accessed from other <Italic>modules</Italic>.
                        </li>
                    </List>
                    <List text='Simplified setting management'>

                    </List>
                </List>

                <List text='Zero developer restrictions'>
                    <li>Full access to <Italic>Node.JS</Italic> packages</li>
                    <li>Full access to <Italic>NPM</Italic> packages</li>
                </List>

            </ul>
        </>

    },
    {
        id: 'studyspacesearch',
        name: "Study Space Search",
        desc: "Locate and discover study locations around the University of Washington campus.",
        image: placeholderImage,
        stack: {
            languages: ["JavaScript", "SQL", "PHP", "HTML", "CSS"],
            technologies: ["Google Cloud Platform (GCP)", "Google Firebase", "MySQL"]
        }
    },
    {
        id: 'fantasywordprediction',
        name: "Fantasy Language Word Prediction",
        desc: "<desc>",
        image: placeholderImage,
        stack: {
            languages: ["Python"],
            frameworksOrLibraries: ["NLTK", "Tkinter"]
        }
    },

    {
        id: 'skillseeker',
        name: "Skill Seeker",
        desc: "Web application to network with others and browse job opportunities.",
        image: placeholderImage,
        stack: {
            languages: ["JavaScript"],
            frameworksOrLibraries: ["React.JS, Node.JS, Express.JS"],
            technologies: ["MongoDB", "Google Firebase"]
        }
    },
]

export class ProjectDatabase {

    public static getProjects(): ProjectDetails[] {
        return projects;
    }

    public static getProjectByID(id: string): ProjectDetails | undefined {
        for (const project of projects) {
            if (project.id === id) {
                return project;
            }
        }
        return undefined;
    }


}




