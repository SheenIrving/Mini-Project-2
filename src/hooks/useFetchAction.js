import { useState, useEffect } from 'react';

export const useFetchAction = () => {
  const [data, setData] = useState([]);
  const url = `https://api.jikan.moe/v4/anime?genres=1`;

  useEffect(() => {
    async function fetchAnime() {
      const response = await fetch(url);

      const json = await response.json();
      setData(json.data);
    }

    fetchAnime();
  }, [url]);

  return { data };
};
