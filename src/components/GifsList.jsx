// import { useEffect, useState } from 'react';
// import getNewGifsOBject from './components/getNewGifsOBject';


// const [gifs, setGifs] = useState([]);
// useEffect(function () {
// 	getNewGifsOBject({ keyword: 'rick' }).then((gifs) => setGifs(gifs));
// }, []);

const GifsList = ({ gifs = [] }) => {
	return (
		<div>
			{gifs.map((setGifs) => {
				return (
					<div>
						<h4>{setGifs.title}</h4>
						<p>{setGifs.id}</p>
						<p>{setGifs.hash}</p>
						<img src={setGifs.url} alt="panda" />
					</div>
				);
			})}
		</div>
	);
};



export default GifsList;
