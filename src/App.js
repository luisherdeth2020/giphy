import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

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
			// .then((data) => setGifs(data.results))
			// .catch((error) => console.log(error));
			// const { resp = [] } = data;
			//TODO tenemos formateada como JSON

			.then((response) => {
				// setGifs(response.data);
				const { data } = response;
				// if(Array.isArray(data)){

				// setGifs(response.data);

				// const gifs = data.map((item) => item.images.downsized_medium);
				// const title = data.map((item) => item.images.title);

				const gifs = data.map((item) => {
					const { images, title, id, rating, source_tld } = item;
					const { url } = images.downsized_medium;
					const { hash } = images.original.hash;
					return { title, id, url, rating, source_tld, hash };
				});
				setGifs(gifs);
				// gifs.map((item) => item.images.downsized_medium.url);
				// setGifs(data.map((item) => item.images.downsized_medium.url));
				// const { data } = response;
				// console.log(gifs);
				// setGifs(gifs);
				// setGifs(title);
				// }
			});
	}, []);

	return (
		<>
			<Navbar title="Rick and Morty App" />
			<div className="container">
				{gifs.map((setGifs) => {
					return (
						<div>
							<h4>{setGifs.title}</h4>
							<p>{setGifs.source_tld}</p>
							<p>{setGifs.hash}</p>
							<img src={setGifs.url} alt="panda" />
						</div>
					);
				})}
			</div>
		</>
	);
}

export default App;
