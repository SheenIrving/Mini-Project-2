import { useFetchAction } from '../hooks/useFetchAction';
import { Card } from '../components';

export const ActionGenre = () => {
  const { data: animes } = useFetchAction();

  return (
    <div className="container">
      <h4 className="pt-4 pb-4 blue-color">Results for Action Animes</h4>

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
