
import React from "react";
import './Modal.css';

  const Modal = ({ movie, handleCloseModal }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={handleCloseModal}>&times;</span>
                <h2 className="title text-muted">{movie.Title}</h2>
                <img
                    src={movie.Poster}
                    alt='movie'
                />
                <p className="description text-muted">
                  Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Est blanditiis dolorem
                  culpa incidunt minus dignissimos deserunt repellat aperiam
                  quasi sunt officia expedita beatae cupiditate, maiores
                  repudiandae, nostrum, reiciendis facere nemo!
                  Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Est blanditiis dolorem
                  culpa incidunt minus dignissimos deserunt repellat aperiam
                  quasi sunt officia expedita beatae cupiditate, maiores
                  repudiandae, nostrum, reiciendis facere nemo!
                  Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Est blanditiis dolorem
                  culpa incidunt minus dignissimos deserunt repellat aperiam
                  quasi sunt officia expedita beatae cupiditate, maiores
                  repudiandae, nostrum, reiciendis facere nemo!
                </p>
                <p className="date text-muted">{movie.Year}</p>
                <p className="rating text-muted" >{movie.rating}</p>
            </div>
        </div>
    
    );

  };

export default Modal;
