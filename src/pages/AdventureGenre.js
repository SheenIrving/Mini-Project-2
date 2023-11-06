import { useFetchAdventure } from '../hooks/useFetchAdventure';
import { Card } from '../components';

export const AdventureGenre = () => {
  const { data: animes } = useFetchAdventure();

  return (
    <div className="container">
      <h4 className="pt-4 pb-4 blue-color">Results for Adventure Animes</h4>

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
