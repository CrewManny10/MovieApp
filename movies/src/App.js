
import { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import HomeList from './components/Home';
import MovieHeading from './components/Headings';
import Navigation from './components/Navigation';

import Shows from './components/Shows'


import AddToFavorites from './components/AddToFavorites';
import RemoveFavorites from './components/RemoveFavorites';
import Favorites from './components/Favorites';






const App = () => {
  // A state object(movies) to hold the list of movies, state of search values, and state favorite objects
  // A state object(searchValue) that store what user has type
  const [movies, setMovies] = useState([]); 
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
 
  

  // Function that call the API
  // Accepts (searchvalue) parameter
  // movie found from the search call are set to the movie state

  // Ensure the API call occurs only when the app loads for the first time
  // Udating the (useEffect) hook when the searchValue changes
  // And pass new value to the (getMovieRequest) function
  useEffect(() => {
    const getMovieRequest = async (searchValue) => {
    try {
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=1190b3a6`;
    const response = await fetch(url);
    if(!response.ok) {
      throw new Error("HTTP error! Status: ${response.status}");
    }

    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    } else {
      console.error('No movie data found in the respone:', responseJson);
    }
  } catch (error) {
    console.error('Error fetching movie data: ', error);
    }
  };
    getMovieRequest();
    getMovieRequest(searchValue);
   
  }, [searchValue]);

  console.log(searchValue);

  //delete all favorite items once transfered
  // The function saveToLocalStorage, takes a list of items and save them to local storage as a key
  // All movie on the favorite list are added to the local storage
  // When the app loads, the useEffect hook retrieve the favorite movie from the local storage
  // Saving the retrieved movies as state
  useEffect(() => {
    try {
    const movieFavorites = JSON.parse(localStorage.getItem('saveKey'));
    if (movieFavorites) {
      setFavorites(movieFavorites);
    }
    } catch(e) {}
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('saveKey', JSON.stringify(items));
  };


    // The function (addFavoriteMovies) accepts a movie, take the current favorite array
    // Copy the array and add the new selected favorite to it
    // Save every back into the state
  const addFavoriteMovies = (movie) => {
    if (!favorites.some((favMovie) => favMovie.imdbID === movie.imdbID)) {
      const newFavoriteList = [...favorites, movie];
      setFavorites(newFavoriteList);
      saveToLocalStorage(newFavoriteList);
    } else {
      console.log("Movie is already in favorite");
    }

  };

  const removeFavoriteMovies = (movie) => {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
    );

    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  // Rendered (MovieList), and passing the movies that are stored in the state props
  // A new row to hold the (MovieListHeading) & (SearchBox) components
  // The values from the (searchValue) & (setSearchValue) function are pass to the SearchBox component
  // Making it easier to pass the search value to the (getMovieRequest) function
  // Passing AddFavorite component as a prop for the MovieList component
  // (addFavoriteMovies) function is pass has a prop (handleFavoriteClick) to the MovieList component
  // MovieListHeading holds the row that renders the selected favorite movie
  // Created removeFavoriteMovie function to remove movie from the favorite state
  // Passed Removedfavorite component and removeFavorite function to the movieList component
  
  return (
    <Router>
    
    <div className='container-fluid movies'>

      <div className="mt-4 mb-4">
        <Navigation searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

   
      <div className="row">
        <Routes>
          <Route path='/' element={<HomeList movies={movies} handleFavoritesClick={addFavoriteMovies} favoriteComponent={AddToFavorites} />} />
          <Route path='/favorites' element={<Favorites favorites={favorites} handleFavoritesClick={removeFavoriteMovies} favoriteComponent={RemoveFavorites} />} />
        </Routes>
        
      </div>

    </div>
    </Router>
  );
};

export default App;
