import { useFetchComedy } from '../hooks/useFetchComedy';
import { Card } from '../components';

export const ComedyGenre = () => {
  const { data: animes } = useFetchComedy();

  return (
    <div className="container">
      <h4 className="pt-4 pb-4 blue-color">Results for Comedy Animes</h4>

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
