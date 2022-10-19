import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

// const apiURL = 'https://rickandmortyapi.com/api/character';
const apiURL =
	'https://api.giphy.com/v1/gifs/search?api_key=LMKcBVBub91y9rp048zM7xM9FkhdT8Zq&q=panda&limit=10&offset=0&rating=g&lang=en';

function App() {
	const [gifs, setGifs] = useState([]);

	useEffect(function() {
		fetch(apiURL)
			//TODO De la respuesta, convetir un tipo JSON
			//TODO Obtenemos como una RESPUESTA, convertir OBJETO (formato JSON)

			.then((res) => res.json())
			// .then((data) => setGifs(data.results))
			// .catch((error) => console.log(error));
			// const { resp = [] } = data;
			//TODO tenemos formateada como JSON
      
			.then((response) => {
				const { data } = response;
				const gifs = data.map((item) => item.images.downsized_medium.url);
				// console.log(gifs);
				setGifs(gifs);
			});
	}, []);

	return (
		<>
			<Navbar title="Rick and Morty App" />
			<div className="container">
        {gifs.map(setGifs => <img src={setGifs} alt={setGifs} />)}
      </div>
		</>
	);
}

export default App;
