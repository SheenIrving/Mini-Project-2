import { Routes, Route } from 'react-router-dom';
import {
  Details,
  Home,
  Search,
  ActionGenre,
  AdventureGenre,
  ComedyGenre,
} from '../pages';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path=""
        element={<Home />}
      />
      <Route
        path="anime/:id"
        element={<Details />}
      />
      <Route
        path="anime"
        element={<Search />}
      />
      <Route
        path="anime/Action"
        element={<ActionGenre />}
      />
      <Route
        path="anime/Adventure"
        element={<AdventureGenre />}
      />
      <Route
        path="anime/Comedy"
        element={<ComedyGenre />}
      />
    </Routes>
  );
};
