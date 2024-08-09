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
const Link = (props: any) => <span
    style={{ color: 'blue', cursor: 'pointer', fontStyle: 'italic' }}
    onClick={() => openLink(props.link)}>
    {props.children}
</span>

const projects: ProjectDetails[] = [
    {
        id: 'modules',
        name: "Modules",
        desc: "Cross-platform desktop to enable to creation and installation of Node.js plugins.",
        image: modulesImage,
        repoLink: 'https://github.com/aarontburn/modules',
        stack: {
            languages: ["JavaScript", "TypeScript", "HTML", "CSS", "Markdown", "JSON"],
            frameworksOrLibraries: ["Electron.JS", "Node.JS"],
            technologies: ["Git/GitHub", "Electron Builder"]
        },
        longDesc: <>
            <p>
                <Bold>Modules</Bold> is a platform for both developers and users
                to install and create <Italic>Node.JS</Italic> plugins, called a <Italic>module</Italic>.

                Unlike other widgetable applications, <Bold>Modules</Bold> was built with the idea
                that anything that could be made using <Italic>Node.JS</Italic> could be turned into
                a <Italic>module</Italic> and be able to be housed within a single application.
            </p>

            <h3 style={{ marginTop: '1em' }}><Bold>Example:</Bold> Volume Controller</h3>
            <p>
                <Link link='https://github.com/aarontburn/modules-volume_controller'>https://github.com/aarontburn/modules-volume_controller</Link>
            </p>
            <br />
            <p>
                The <Italic>Volume Controller</Italic> module is a functional example of what
                you can make using this API. It uses two external packages found on
                the <Italic>NPM</Italic> repository:
                the <Link link='https://www.npmjs.com/package/native-sound-mixer'>native-sound-mixer
                </Link> and <Link link='https://www.npmjs.com/package/node-window-manager'>node-window-manager</Link>

                . This <Italic>module</Italic> works similar to the Windows Sound Mixer, where
                you can control the volume of all sound-producing processes, as well as the
                master volume.
            </p>


        </>,
        features: <>
            <ul className='features-list'>
                <List text={<Bold>Developer Features:</Bold>}>
                    <List text='Streamlined developer API'>
                        <li>Includes scripts and tools to export modules.</li>
                        <List text={<>Includes boilerplate repository.</>}>
                            <p>
                                <Link link='https://github.com/aarontburn/modules-module-quickstart'>
                                    https://github.com/aarontburn/modules-module-quickstart
                                </Link>
                            </p>
                        </List>
                        <List text='Inter-Module Communication (IMC)'>
                            <li>
                                A <Italic>module</Italic> can expose an API that can be accessed from other <Italic>modules</Italic>.
                            </li>
                        </List>
                        <List text='Simplified setting management'>
                            <li>Streamlined state management and storage.   </li>
                        </List>
                        <li>Extensive documentation (inline, JSDoc, Markdown) for developer-relevant files, classes/objects, and functions.</li>
                    </List>

                    <List text='Zero developer restrictions'>
                        <li>Full access to <Italic>Node.JS</Italic> packages</li>
                        <li>Full access to <Italic>NPM</Italic> packages</li>
                    </List>
                </List>

                <List text={<Bold>User Features:</Bold>}>
                    <List text={<>Simplified <Italic>module</Italic> management.</>}>
                        <li>In-app features to add or remove modules</li>
                    </List>

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
        },
        features: <ul className='features-list'>
            <List text="Displays various study locations around the University of Washington Tacoma campus, including:">
                <li>Location (address, building, room)</li>
                <li>Operating hours</li>
                <li>Space owner</li>
                <li>Space amenities (whiteboard, microwave, etc.)</li>
                <li>Image</li>
            </List>
            <li>Filtering specific spaces to fit a criteria.</li>
            <List text={<Bold>User Profiles</Bold>}>
                <li>Registered users can bookmark spaces and view them in a dedicated page.</li>
                <li>Registered users can leave comments and score a location by noise level,
                    availability, and busyness for other users to see.</li>
            </List>

        </ ul>
    },
    {
        id: 'fantasywordprediction',
        name: "Fantasy Language Word Prediction",
        desc: "Perform word prediction in Star Treks Vulcan language.",
        image: placeholderImage,
        stack: {
            languages: ["Python"],
            frameworksOrLibraries: ["NLTK", "Tkinter"],
            others: ["Natural Language Processing (NLP)"]
        },
        longDesc: <>
            <p>
                This project explored Natural Language Processing (NLP), which resulted in
                an application that allows the user to do word prediction
                in <Italic>Star Trek's</Italic> <Bold>Vulcan</Bold> language.
            </p>

            <h3 style={{ marginTop: '1em' }}><Bold>Model Summary</Bold></h3>
            <p>
                Using a dataset of ~1.5 million words, we trained both a bigram statistical model
                and a trigram statistical model.
            </p>
            
            <h3 style={{ marginTop: '1em' }}><Bold>Limitations</Bold></h3>
            <p>
                One of the limitations we faced was acquiring a dataset. There wasn't enough pre-translated
                Vulcan text, so we used an <Link link='https://funtranslations.com/vulcan'>English-to-Vulcan</Link> translator.
                While this seemed to work, we couldn't guarantee that this issue was accurate for complex
                words and grammatical structures due to a lack of Vulcan-to-English translators.
            </p>

        </>,
        features: <ul className='features-list'>
            <List text='Clean dataset'>
                <li>
                    Implemented a custom dataset cleaner to strip away illegal characters and replace character
                    variants with their standardized version (<Italic>e.g.</Italic> “ (U+201C) → ” (U+0022))
                </li>
            </List>
            <List text="Custom word parser">
                <li>
                    The training process uses a non-standard word tokenizer to accommodate
                    Vulcan's unique punctuation.
                </li>
            </List>
            <li>Upon typing a word in, predicts and provides the three most-common subsequent words.</li>



        </ul>
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




