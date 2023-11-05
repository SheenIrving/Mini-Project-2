import { useState, useEffect } from 'react';

export const useFetch = (apiPath) => {
  const [data, setData] = useState([]);
  const url = `https://api.jikan.moe/v4/${apiPath}`;

  useEffect(() => {
    async function fetchAnimes() {
      const response = await fetch(url);

      const json = await response.json();
      setData(json.results);
    }

    fetchAnimes();
  }, [url]);

  return { data };
};
