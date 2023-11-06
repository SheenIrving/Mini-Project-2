import { useSearchParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import { Card } from '../components';

export const Search = () => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get('q');
  const { data: animes } = useFetch(queryTerm);

  return (
    <div className="container">
      <h4 className="pt-4 pb-4 blue-color">
        {animes.length === 0
          ? `No result found for '${queryTerm}'`
          : `Results for '${queryTerm}'`}
      </h4>

      <div className="row justify-content-evenly">
        {animes.map((anime) => (
          <Card
            key={anime.mal_id}
            anime={anime}
          />
        ))}
      </div>
    </div>
  );
};
