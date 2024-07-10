import { NavButton, openLink } from '../components/Components';
import linkedInLogo from '../res/linkedin.png';
import gitHubLogo from '../res/github.png';
import './css/Home.css'

const FONT_SIZE_1: string = '3em';
const FONT_SIZE_2: string = '2.5em';


export function Home({ changePage }: { changePage: (path: string) => void }) {

    return (
        <>
            <div className="page" id="homepage">
                <h1 style={{ fontSize: '7em' }}>Aaron Burnham</h1>
                <h2>Aspiring Software Developer</h2>

                <div className="home-nav">
                    <NavButton displayText={"About"} callback={() => changePage('/about')} fontSize={FONT_SIZE_1} width='4em'/>
                    <NavButton displayText={"Projects"} callback={() => changePage('/projects')} fontSize={FONT_SIZE_1} width='4em'/>
                    <NavButton displayText={"Contact"} callback={() => changePage('/contact')} fontSize={FONT_SIZE_1} width='4em'/>
                </div>

                <div className="home-nav">
                    <NavButton displayText={"LinkedIn"} image={linkedInLogo} callback={() => openLink('LinkedIn')} fontSize={FONT_SIZE_2} width='15em'/>
                    <NavButton displayText={"GitHub"} image={gitHubLogo} callback={() => openLink('GitHub')} fontSize={FONT_SIZE_2} width='15em' />
                </div>

            </div>
        </>


    );
}