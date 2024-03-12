import React, { useState } from 'react';
import Modal from './Modal';

//  A component to display the list of movies
// Pass movie in as props and loop over the collection with map.
// Display/render image using tbe Poster URL as the source
// Assigned our prop component a variable (FavoriteComponent)
// hence i'll have more control over what gets rendered
const Home = (props) => {
  console.log("Movies in home", props.movies);
  const FavoriteComponent = props.favoriteComponent;
  const [openModal, setOpenModal] = useState(false);
  const [selectedItems, setSelectedItems] = useState(null);
  const numberOfPosters = 50;


  const handlePosterClick = (movie) => {
    console.log("clicked on poster", movie);
    setSelectedItems(movie);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };


  const filterPage = props.movies.filter(movie => movie.Poster !== 'N/A' && movie.Title !== 'N/A');
  
  const posterToRender = Math.min(numberOfPosters, filterPage.length);

  return (
    
    <React.Fragment>
      {filterPage.slice(0,posterToRender).map((movie, index) => (
        <div key={index} className='image-container d-flex justify-content-start m-3'>
          <img 
          src={movie.Poster} 
          alt='movie' 
          onClick={() => handlePosterClick(movie)}
          />
          <div onClick={() => props.handleFavoritesClick(movie)}
            className='overlay d-flex align-items-center justify-content-center'>
            <FavoriteComponent/>
          </div>
        </div>
      ))}

      {openModal && selectedItems && (
        <Modal
          movie={selectedItems}
          handleCloseModal={handleCloseModal}
        />
      )}
    </React.Fragment>
  );
};

export default Home;

