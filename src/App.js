import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import GifsList from './components/GifsList';
import getNewGifsOBject from './components/getNewGifsOBject';

function App() {
	const [gifs, setGifs] = useState([]);

	useEffect(function () {
		getNewGifsOBject({ keyword: 'rick' }).then((gifs) => setGifs(gifs));
	}, []);

	return (
		<>
			<Navbar title="Rick and Morty App" />
			<div className="container">
				<GifsList gifs={gifs} />
			</div>
		</>
	);
}

export default App;
