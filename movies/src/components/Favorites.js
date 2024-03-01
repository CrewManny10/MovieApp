import React from 'react';

import Home from './Home';


const Favorites = ({favorites, handleFavoritesClick, favoriteComponent}) => {
    return (
     <div className='row'>
        <Home movies={favorites} handleFavoritesClick={handleFavoritesClick} favoriteComponent={favoriteComponent} />
     </div>
       
    );

};

export default Favorites; 