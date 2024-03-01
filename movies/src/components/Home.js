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


  const handlePosterClick = (movie) => {
    console.log("clicked on poster", movie);
    setSelectedItems(movie);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  }

  // Adding new class to the parent div (image-container) give the ability to add a zoom effect
  // New overlay div that shows zooming effect when the user hover over the poster
  // The handleFavoriteClick function is from props and add to (onClick)
  return (
    
    <React.Fragment>
      {props.movies.map((movie, index) => (
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

