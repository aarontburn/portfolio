import './css/About.css'
import { Transition } from "../components/Transitions";


const SectionTitle = (props: any) => {
    return <>
        <h1 style={{ margin: "0.5em 0 0 0.5em", fontWeight: '550' }}>{props.text}</h1>
        <div style={{ margin: "0 2em" }}>
            {props.children}
        </div>
    </>
};

const Spacer = () => <div style={{ marginRight: 'auto' }}></div>

const sampleText: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

export function About(props: any) {
    return <Transition>
        <div className="page" id='about-page'>
            <div id='about-body'>
                <SectionTitle text='About Me'>
                    <p>{sampleText}</p>
                </SectionTitle>

                <SectionTitle text='Education'>
                    <p style={{ fontWeight: 550 }}>Bachelors of Science in Computer Science</p>
                    <div style={{ display: 'flex' }}>
                        <p>University of Washington</p>
                        <Spacer />
                        <p>Expected December 2024</p>
                    </div>
                    <br />
                    <p style={{ fontWeight: 550 }}>Associates of Science in Computer Science and Engineering</p>
                    <div style={{ display: 'flex' }}>
                        <p>South Seattle College</p>
                        <Spacer />
                        <p>June 2024</p>
                    </div>

                </SectionTitle>

                <SectionTitle text='Work Experience' />
                <SectionTitle text='Projects'>
                    <p className='nav-button' id='projects-button'>Projects {'>'}</p>


                </SectionTitle>
                <SectionTitle text='Technical Skills' />
            </div>



        </div>
    </ Transition>
}