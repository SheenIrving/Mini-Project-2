import { useState, useEffect } from 'react';

export const useFetchAdventure = () => {
  const [data, setData] = useState([]);
  const url = `https://api.jikan.moe/v4/anime?genres=2`;

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
