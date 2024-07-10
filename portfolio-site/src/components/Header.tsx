import './Header.css'
import { NavButton } from './NavButton'
import { Transition } from './Transitions';

const FONT_SIZE: string = '1.75em';


export function Header({ callback }: { callback: (v: any) => void }) {
    if (window.location.pathname === '/') {
        return <></>
    }


    return <Transition>
        <div id='header'>
            <NavButton displayText={"Aaron Burnham"} callback={() => callback('/')} fontSize={FONT_SIZE} />


            <div id='header-nav'>
                <NavButton displayText={"About"} callback={() => callback('/about')} fontSize={FONT_SIZE} />
                <NavButton displayText={"Projects"} callback={() => callback('/projects')} fontSize={FONT_SIZE} />
                <NavButton displayText={"Contact"} callback={() => callback('/contact')} fontSize={FONT_SIZE} />
            </div>

        </div>

    </Transition>
} 