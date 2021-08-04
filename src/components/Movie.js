import React from "react";

const DEFAULT_PLACEHOLDER_IMAGE =
    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


const Movie = ({ movie }) => {
    const poster =
        movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
    return (
        <div className="movie img-rel">
            <div className="img-abs">
                <img
                    width="200"
                    alt={`The movie titled: ${movie.Title}`}
                    src={poster}                                 
                    onClick={() => alert(`Name: ${movie.Title}, Release Year: ${movie.Year}, imdbID: ${movie.imdbID}`)}
                />
                {/* <h5>{movie.Title}</h5>
                <p>({movie.Year})</p> */}
            </div>
        </div>
    );
};


export default Movie;