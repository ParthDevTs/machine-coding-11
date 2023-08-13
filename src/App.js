import './App.css';
import { Route, Routes } from 'react-router-dom';
import MovieLIsting from './pages/MovieLIsting';
import Navbar from './components/navbar';
import StarredMovies from './pages/StarredMovies';
import Watchlist from './pages/Watchlist';
import MovieDetail from './pages/MovieDetail';

function App() {
  return (
    <div className="App bg-[#f1f1f1]">
      <Navbar />
      <Routes>
        <Route path='/' element={<MovieLIsting />} ></Route>
        <Route path='/starred' element={<StarredMovies />} ></Route>
        <Route path='/watchlist' element={<Watchlist />} ></Route>
        <Route path='/movie/:id' element={<MovieDetail />} ></Route>
      </Routes>
    </div>
  );
}

export default App;

