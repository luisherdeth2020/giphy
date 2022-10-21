import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import GetGifs from './components/GetGifs';
import getNewGifsOBject from './components/GetNewGifsOBject';

// const apiURL = 'https://rickandmortyapi.com/api/character';
const apiURL =
	'https://api.giphy.com/v1/gifs/search?api_key=LMKcBVBub91y9rp048zM7xM9FkhdT8Zq&q=panda&limit=10&offset=0&rating=g&lang=en';

function App() {
	const [gifs, setGifs] = useState([]);

	useEffect(function () {
		fetch(apiURL)
			//TODO De la respuesta, convetir un tipo JSON
			//TODO Obtenemos como una RESPUESTA, convertir OBJETO (formato JSON)

			.then((res) => res.json())

			
			//TODO tenemos formateada como JSON

			.then((response) => {
				const newGifsObject = getNewGifsOBject(response.data);
				setGifs(newGifsObject);
			});
	}, []);

	return (
		<>
			<Navbar title="Rick and Morty App" />
			<div className="container">
				<GetGifs gifs={gifs} />
			</div>
		</>
	);
}

export default App;
