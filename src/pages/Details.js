import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const Details = () => {
  const params = useParams();
  const [anime, setAnime] = useState({});
  const [char, setChar] = useState({});
  const [char2, setChar2] = useState({});
  const [char3, setChar3] = useState({});

  useEffect(() => {
    async function fetchAnime() {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime/${params.id}`
      );
      const json = await response.json();
      setAnime(json);
    }

    async function fetchChar() {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime/${params.id}/characters`
      );
      const character = await response.json();
      setChar(character.data[0]);
    }
    async function fetchChar2() {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime/${params.id}/characters`
      );
      const character2 = await response.json();
      setChar2(character2.data[1]);
    }
    async function fetchChar3() {
      const response = await fetch(
        `https://api.jikan.moe/v4/anime/${params.id}/characters`
      );
      const character3 = await response.json();
      setChar3(character3.data[2]);
    }
    fetchAnime();
    fetchChar();
    fetchChar2();
    fetchChar3();
  }, [params.id]);

  return (
    <div className="container pt-3">
      <div className="space">
        <section
          id="welcome-section"
          className="screen-width"
        >
          <div className="information">
            <div className="poster">
              <img
                src={anime.data?.images?.jpg?.image_url}
                alt=""
              />
            </div>
            <div className="description">
              <h1 className="blue-color">{anime.data?.title}</h1>
              <div className="title">
                <button className="title_button">
                  <i className="bi bi-play-fill" /> Watch Now
                </button>
                <button className="title_button ">
                  <i className="bi bi-plus-lg" /> Add to List
                </button>
              </div>
              <div className="sub-header">
                <p id="sub-header-1">
                  <span className="bold">Alias: </span>
                  <span className="italic">
                    テイルズ オブ シンフォニア THE ANIMATION{' '}
                  </span>
                </p>
                <p id="sub-header-2">
                  <span className="bold">Original Airing: </span>
                  <span className="italic">
                    June 8th, 2007 - December 21st, 2007
                  </span>
                </p>
                <p id="sub-header-1">
                  <span className="fw-bold orange-color">Genres: </span>
                  {anime.data?.genres ? (
                    <span>
                      {anime.data?.genres.map((genre) => (
                        <span
                          className="blue-color fst-italic fw-bold"
                          key={genre.mal_id}
                        >
                          {' '}
                          {genre.name}
                        </span>
                      ))}
                    </span>
                  ) : (
                    ''
                  )}
                </p>
              </div>
              <div className="space">
                <p className="blue-color">{anime.data?.synopsis}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="share">
          <div className="socials">
            <div>
              <h5>
                <i className="fa-solid fa-share" /> Share This Anime
              </h5>
            </div>
            <button className="button socials_button">
              <i className="fa-brands fa-telegram" /> TELEGRAM
            </button>
            <button className="button socials_button">
              <i className="fa-brands fa-reddit" /> REDDIT
            </button>
            <button className="button socials_button">
              <i className="fa-brands fa-facebook" /> FACEBOOK
            </button>
            <button className="button socials_button">
              <i className="fa-brands fa-whatsapp" /> WHATSAPP
            </button>
            <button className="button socials_button">
              <i className="fa-brands fa-square-tumblr" /> TUMBLR
            </button>
          </div>
        </section>
        <div className="container">
          <section
            id="general-information"
            className="screen-width"
          >
            <div className="general-information">
              <div className="left-column">
                <h2>GENERAL INFORMATION</h2>
                <div className="project-tile">
                  <div className="sub-header">
                    <table className="info-tile">
                      <tbody>
                        <tr>
                          <th
                            className="info-tile-label"
                            scope="row"
                          >
                            Studio(s):
                          </th>
                          <td className="info-tile-data italic">ufotable</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="borderClass" />
                    <table className="info-tile">
                      <tbody>
                        <tr>
                          <th
                            className="info-tile-label"
                            scope="row"
                          >
                            Director(s):
                          </th>
                          <td className="info-tile-data italic">
                            Haruo Sotozaki
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="borderClass" />
                    <table className="info-tile">
                      <tbody>
                        <tr>
                          <th
                            className="info-tile-label"
                            scope="row"
                          >
                            Producer(s):{' '}
                          </th>
                          <td className="info-tile-data italic">unknown</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="borderClass" />
                    <table className="info-tile">
                      <tbody>
                        <tr>
                          <th
                            className="info-tile-label"
                            scope="row"
                          >
                            Licensor:{' '}
                          </th>
                          <td className="info-tile-data italic">
                            Discotek Media
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="borderClass" />
                    <table className="info-tile">
                      <tbody>
                        <tr>
                          <th
                            className="info-tile-label"
                            scope="row"
                          >
                            Streaming:
                          </th>
                          <td className="info-tile-data italic">Crunchyroll</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <h2>CAST</h2>
              <div className="project-tile">
                <div className="sub-header center">
                  <div className="cast-flex">
                    <div className="cast-image">
                      <img
                        src={char.character?.images?.jpg?.image_url}
                        alt=""
                      />
                    </div>
                    <table className="info-tile-cast">
                      <tbody>
                        <tr>
                          <td className="cast-name bold blue-color">
                            {char.character?.name}
                          </td>
                        </tr>
                        <tr>
                          <th className="blue-color">{char.role}</th>
                        </tr>
                        <tr>
                          <td className="info-tile-data italic">
                            <div className="cast-image">
                              <img
                                src=""
                                alt="Picture of Lloyd Irving from Tales of Symphonia The Animation"
                              />
                            </div>
                            Katsuyuki Konishi{' '}
                            <span className="italic small-font">
                              (Japanese)
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="borderClass" />
                  <div className="cast-flex">
                    <div className="cast-image">
                      <img
                        src={char2.character?.images?.jpg?.image_url}
                        alt="Picture of Colette Brunel from Tales of Symphonia The Animation"
                      />
                    </div>
                    <table className="info-tile-cast">
                      <tbody>
                        <tr>
                          <td className="cast-name bold blue-color">
                            {char2.character?.name}
                          </td>
                        </tr>
                        <tr>
                          <th className="voice-cast-header">Actors</th>
                        </tr>
                        <tr>
                          <td className="info-tile-data italic">
                            Nana Mizuki{' '}
                            <span className="italic small-font">
                              (Japanese)
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="borderClass" />
                  <div className="cast-flex">
                    <div className="cast-image">
                      <img
                        src={char3.character?.images?.jpg?.image_url}
                        alt="Genius Sage from Tales of Symphonia The Animation"
                      />
                    </div>
                    <table className="info-tile-cast">
                      <tbody>
                        <tr>
                          <td className="cast-name bold blue-color">
                            {char3.character?.name}
                          </td>
                        </tr>
                        <tr>
                          <th className="voice-cast-header">Actors</th>
                        </tr>
                        <tr>
                          <td className="info-tile-data italic">
                            Ai Orikasa{' '}
                            <span className="italic small-font">
                              (Japanese)
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="borderClass" />
                  <div className="cast-flex">
                    <div className="cast-image">
                      <img
                        src="https://cdn.myanimelist.net/images/characters/7/92759.jpg"
                        alt='Picture of Refill "Raine" Sage from Tales of Symphonia The Animation'
                      />
                    </div>
                    <table className="info-tile-cast">
                      <tbody>
                        <tr>
                          <td className="cast-name bold">
                            Refill "Raine" Sage
                          </td>
                        </tr>
                        <tr>
                          <th className="voice-cast-header">Actors</th>
                        </tr>
                        <tr>
                          <td className="info-tile-data italic">
                            Yumi Touma{' '}
                            <span className="italic small-font">
                              (Japanese)
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="borderClass" />
                  <div className="cast-flex">
                    <div className="cast-image">
                      <img
                        src="https://cdn.myanimelist.net/images/characters/16/93369.jpg"
                        alt="Picture of Zelos Wilder from Tales of Symphonia the Animation"
                      />
                    </div>
                    <table className="info-tile-cast">
                      <tbody>
                        <tr>
                          <td className="cast-name bold">Zelos Wilder</td>
                        </tr>
                        <tr>
                          <th className="voice-cast-header">Actors</th>
                        </tr>
                        <tr>
                          <td className="info-tile-data italic">
                            Masaya Onosaka{' '}
                            <span className="italic small-font">
                              (Japanese)
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="borderClass" />
                  <div className="cast-flex">
                    <div className="cast-image">
                      <img
                        src="https://cdn.myanimelist.net/images/characters/6/204303.jpg"
                        alt="Picture of Shihna Fujibayashi from Tales of Symphonia the Animation"
                      />
                    </div>
                    <table className="info-tile-cast">
                      <tbody>
                        <tr>
                          <td className="cast-name bold">Sheena Fujibayashi</td>
                        </tr>
                        <tr>
                          <th className="voice-cast-header">Actors</th>
                        </tr>
                        <tr>
                          <td className="info-tile-data italic">
                            Akemi Okamura{' '}
                            <span className="italic small-font">
                              (Japanese)
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="borderClass" />
                  <div className="cast-flex">
                    <div className="cast-image">
                      <img
                        src="https://cdn.myanimelist.net/images/characters/10/92269.jpg"
                        alt="Picture of Presea Combatir from Tales of Symphonia the Animation"
                      />
                    </div>
                    <table className="info-tile-cast">
                      <tbody>
                        <tr>
                          <td className="cast-name bold">Presea Combatir</td>
                        </tr>
                        <tr>
                          <th className="voice-cast-header">Actors</th>
                        </tr>
                        <tr>
                          <td className="info-tile-data italic">
                            Houko Kuwashima{' '}
                            <span className="italic small-font">
                              (Japanese)
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="borderClass" />
                  <div className="cast-flex">
                    <div className="cast-image">
                      <img
                        src="https://cdn.myanimelist.net/images/characters/4/204301.jpg"
                        alt="Picture of Regal Bryant from Tales of Symphonia the Animation"
                      />
                    </div>
                    <table className="info-tile-cast">
                      <tbody>
                        <tr>
                          <td className="cast-name bold">Regal Bryant</td>
                        </tr>
                        <tr>
                          <th className="voice-cast-header">Actors</th>
                        </tr>
                        <tr>
                          <td className="info-tile-data italic">
                            Akio Ootsuka{' '}
                            <span className="italic small-font">
                              (Japanese)
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="borderClass" />
                  <div className="cast-flex">
                    <div className="cast-image">
                      <img
                        src="https://cdn.myanimelist.net/images/characters/5/92752.jpg"
                        alt="Picture of Kratos Aurion from Tales of Symphonia the Animation"
                      />
                    </div>
                    <table className="info-tile-cast">
                      <tbody>
                        <tr>
                          <td className="cast-name bold">Kratos Aurion</td>
                        </tr>
                        <tr>
                          <th className="voice-cast-header">Actors</th>
                        </tr>
                        <tr>
                          <td className="info-tile-data italic">
                            Fumihiko Tachiko{' '}
                            <span className="italic small-font">
                              (Japanese)
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="borderClass" />
                </div>
              </div>
            </div>
          </section>

          <p className="comment-post">Comment Section:</p>
          <div className="posted-comment"></div>
          <textarea
            rows={4}
            cols={50}
            name="comment"
            form="comment"
            id="comment"
            placeholder="Share your thoughts....."
            required=""
            defaultValue={''}
          />
          <button className="button_comment">Submit</button>
        </div>
      </div>
    </div>
  );
};
