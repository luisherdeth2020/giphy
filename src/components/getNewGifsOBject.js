import { useEffect, useState } from 'react';

const apiKey = 'LMKcBVBub91y9rp048zM7xM9FkhdT8Zq';

const [gifs, setGifs] = useState([]);
export default function getNewGifsOBject({ keyword = 'morty' } = {}) {
	const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;

	return (
		fetch(apiURL)
			//TODO De la respuesta, convetir un tipo JSON
			//TODO Obtenemos como una RESPUESTA, convertir OBJETO (formato JSON)
			.then((res) => res.json())

			//TODO tenemos formateada como JSON

			.then((response) => {
				const { data = [] } = response;
				const gifs = data.map((item) => ({
					url: item.images.downsized_medium.url,
					id: item.id,
					title: item.title,
				}));
				return gifs;
			})
	);

	
	
}

useEffect(function () {
	getNewGifsOBject({ keyword: 'rick' }).then((gifs) => setGifs(gifs));
}, []);