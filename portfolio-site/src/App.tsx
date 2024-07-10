import './App.css';
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { useState } from 'react';
import { Header } from './components/Header';
import { AnimatePresence } from 'framer-motion';

function App() {
	const [selectedTab, setSelectedTab] = useState('/');
	const nav = useNavigate();


	const changePage = (tab: string) => {
		setSelectedTab(tab);
		nav(tab);
	}


	return (
		<AnimatePresence>
			<Header callback={changePage} />


			<Routes>
				<Route path="/" element={<Home callback={changePage} />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</ AnimatePresence>
	);
}

export default App;
