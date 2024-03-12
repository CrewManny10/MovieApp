import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';
import Shows from './Shows';

const Navigation = (props) => {
  const handleChange = (event) => {
    console.log("Input value: ", event.target.value);
    props.setSearchValue(event.target.value);
  }
  return (
    <nav className="nav nav-pills nav-justified">
      <a className='navbar-brand'>Streamer</a>
      <Link to="/" className="nav-item nav-link">
        Home 
      </Link>
      {/* <Link to="/movies" className="nav-item nav-link">
        Movies
      </Link>
      <Link to="/shows" className="nav-item nav-link">
        Shows
      </Link> */}
      <Link to="/favorites" className="nav-item nav-link">
        Favorites
      </Link>
    <input 
      className="form-control"
      value={props.searchValue}
      onChange={handleChange}
      placeholder="type of search...">
    </input>

    </nav>
    
  );
};

export default Navigation;
