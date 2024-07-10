import React from 'react';
import { Spacer } from '../components/Components';
import './css/About.css'

const BOLD_WEIGHT: number = 550;

const Section = (props: any) => {
    return <>
        <h1 style={{ margin: "0.5em 0 0 0.5em", fontWeight: BOLD_WEIGHT }}>{props.title}</h1>
        <div style={{ margin: "0 2em" }}>
            {props.children}
        </div>
    </>
};

const Bold = (props: any) => {
    return <p style={{ fontWeight: BOLD_WEIGHT }}>{props.children}</p>
}

const SkillSection = (props: any) => {
    return <p style={{ marginBottom: '0.5em' }}>
        <span style={{ fontWeight: BOLD_WEIGHT }}>{props.title}</span>
        {props.children}
    </p>
}

const SplitSection = ({ left, right }: { left: React.ReactNode, right: React.ReactNode }) => {
    return <>
        <div style={{ display: 'flex' }}>
            {left}
            <Spacer />
            {right}
        </div>
    </>
}

const sampleText: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

export function About({ changePage }: { changePage: (path: string) => void }) {
    return <>
        <div className="page" id='about-page'>
            <div id='about-body'>
                <Section title='About Me'>
                    <p>{sampleText}</p>
                </Section>

                <Section title='Education'>

                    <SplitSection
                        left={<Bold>Bachelors of Science in Computer Science</Bold>}
                        right={<p>Expected December 2024</p>} />

                    <SplitSection
                        left={<p>University of Washington</p>}
                        right={<p>GPA: 3.84/4.0</p>} />


                    <br />
                    <SplitSection
                        left={<Bold>Associates of Science in Computer Science and Engineering</Bold>}
                        right={<p>September 2019 – June 2024</p>} />

                    <SplitSection
                        left={<p>South Seattle College</p>}
                        right={<p>GPA: 3.74/4.0</p>} />
                </Section>

                <Section title='Work Experience'>
                    <SplitSection
                        left={<Bold>Undergraduate Computer Science Teaching Assistant</Bold>}
                        right={<p>March 2023 – Present</p>} />

                    <SplitSection
                        left={<p>University of Washington</p>}
                        right={<p></p>} />
                    <br />

                    <SplitSection
                        left={<Bold>Lifeguard and Swim Instructor</Bold>}
                        right={<p>December 2018 – Present</p>} />

                    <SplitSection
                        left={<p>Seattle Parks and Recreation</p>}
                        right={<p></p>} />
                </Section>


                <Section title='Projects'>
                    <p onClick={() => changePage('/projects')} className='nav-button' id='projects-button'>Projects ↗</p>

                </Section>

                <Section title='Technical Skills'>
                    <SkillSection title='Languages: '>
                        Java, JavaScript, TypeScript, Python, SQL, HTML, CSS, C, C#, PHP
                    </SkillSection>
                    <SkillSection title='Frameworks/Libraries: '>
                        Electron.js, Node.js, React.js, Java Swing, JavaFX, jQuery, Express.js, JUnit, NLTK, Tkinter
                    </SkillSection>
                    <SkillSection title='Technologies: '>
                        MongoDB, Google Firebase, Google Cloud Platform (GCP), Oracle Cloud Database, MySQL, Maven, Git/GitHub, Linux, IntelliJ IDEA,
                        PyCharm, VS Code, MERN, Android Studio, Unity, Ubuntu, Eclipse
                    </SkillSection>
                    <SkillSection title='Others: '>
                        Object-Oriented Programming (OOP), Agile, Scrum, Full-Stack, Web Development, Mobile Development, Version Control, Unit Testing,
                        Front-end, Back-end, Natural Language Processing (NLP), Functional Programming
                    </SkillSection>
                </Section>
            </div>



        </div>
    </ >
}