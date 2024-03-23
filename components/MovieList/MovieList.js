import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function MovieList() {
    const router = useRouter();
    const id = router.query;

    
    const [movieList, setMovieList] = useState([]);
    const [genreList, setGenreList] = useState([]);
    const apiKey = "38b4b30dd5b7d3be47362aff9acced98";

    useEffect(() => {
        getMovie();
        getGenre();
    },[])

    const getMovie = () => {
        try {
            const apiURL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
            fetch(apiURL)
                .then((res) => res.json())
                .then((data) => setMovieList(data.results))
        } catch (error) {
            console.error("Error fetching movies: ", error);
        }
    }

    const getGenre = () => {
        try {
            const apiURL = `https://api.themoviedb.org/3/genre/tv/list?language=en&api_key=${apiKey}`;
            fetch(apiURL)
                .then(res => res.json())
                .then((data) => {
                    setGenreList(data);
                } )
        } catch (error) {
            console.error("Error fetching genres: ", error)
        }
    }

    const findMovie = () => {
        const apiURL = `https://api.themoviedb.org/3/search/movie?query=${specificMovie}&api_key=${apiKey}`;
        fetch(apiURL)
            .then(res => res.json())
            .then(data => {
                const firstGenreIds = specificMovie.genre_ids[0]  // Get the first genre ID of the specific movie
                const matchingGenre = genreList.find(genre => genre.id === firstGenreIds) // Find the genre object with the matching ID
                if (matchingGenre) {
            console.log("Matching genre:", matchingGenre.name); // Log the name of the matching genre
        } else {
            console.log("Genre not found in genreList"); // Log if the genre is not found in genreList
        }
            }
            )
    }

    const specificMovie =  movieList.find((movie) => movie.title === id.id);

    if (specificMovie) {
        return (
            <article className="article-movie-list">
                <div className="container grid">
                    <picture className="movie-list__picture">
                        <img className="picture__img" src={`https://image.tmdb.org/t/p/w500/${specificMovie.backdrop_path}`} alt={specificMovie.title} />
                    </picture>
                    <section className="movie-list__section">
                        <h1 className="movie-list__title">{specificMovie.title}</h1>
                        <section className="movie-list__details row">
                            <p>{specificMovie.release_date}</p>
                            <p className="details__popularity">{specificMovie.popularity} likes</p>
                        </section>
                        <section className="overview-section">
                            <h2 className="overview__title">Overview</h2>
                            <p className="overview__text">{specificMovie.overview}</p>
                        </section>
                    </section>
                </div>
            </article>
        );
    } else {
        return <div>Movie not found</div>;
    }

}