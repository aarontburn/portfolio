import './App.css';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { AnimatePresence } from 'framer-motion';
import { Transition } from './components/Transitions';
import { ProjectDetailsPage } from './pages/ProjectDetailsPage';


export default function App() {
	const [_, setSelectedTab] = useState('/');
	const location = useLocation();
	const [isHomePage, setIsHomePage] = useState(location.pathname === "/");
	const nav = useNavigate();

	useEffect(() => {
		setIsHomePage(location.pathname === "/");
	}, [location.pathname]);


	const changePage = (tab: string) => {
		setSelectedTab(tab);
		nav(tab);
	}


	return (
		<>
			<AnimatePresence mode='wait'>
				{!isHomePage && (
					<Transition>
						<Header callback={changePage} />
					</Transition>
				)}
			</AnimatePresence>

			<AnimatePresence mode='wait'>
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Transition><Home changePage={changePage} /></Transition>} />
					<Route path="/about" element={<Transition><About changePage={changePage} /></Transition>} />
					<Route path="/projects" element={<Transition><Projects changePage={changePage} /></Transition>} />
					<Route path="/projects/:id" element={<Transition><ProjectDetailsPage /></Transition>} />
					<Route path="/contact" element={<Transition><Contact /></Transition>} />
				</Routes>
			</ AnimatePresence>
		</>

	);
}
