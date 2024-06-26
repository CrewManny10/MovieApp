import React from "react";


// Passed in the MovieList and rendered it in the overplay
// add the remove sign to the overplay and the remove icon
const RemoveFavorites = () => {
    return (
        <React.Fragment>
          <span className="mr-2"></span>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-x-square"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'
            />
          </svg>
        </React.Fragment>
    );
};

export default RemoveFavorites;
