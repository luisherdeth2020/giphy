import { useEffect, useState } from 'react';
import getNewGifsOBject from './getNewGifsOBject';

const GifsList = () => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getNewGifsOBject({ keyword: 'rick' }).then((gifs) => setGifs(gifs));
  }, []);

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
