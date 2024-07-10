import './css/Home.css'

import { NavButton } from "../components/NavButton";
import { Transition } from "../components/Transitions";

export function Home({ callback }: { callback: (v: any) => void }) {

    return (
        <Transition>
            <div className="page" id="homepage">
                <h1 style={{ fontSize: '7em' }}>Aaron Burnham</h1>
                <h2>Aspiring Software Developer</h2>

                <div id="home-nav">
                    <NavButton displayText={"About"} callback={() => callback('/about')} fontSize={'3em'} />
                    <NavButton displayText={"Projects"} callback={() => callback('/projects')} fontSize={'3em'} />
                    <NavButton displayText={"Contact"} callback={() => callback('/contact')} fontSize={'3em'} />
                </div>

            </div>
        </ Transition>


    );
}