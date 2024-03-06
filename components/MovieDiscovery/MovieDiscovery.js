import { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';


export default function MovieDiscovery() {
    const [movieList, setMovieList] = useState([]);

    const getMovie = () => {
        try {
            const apiURL = "https://api.themoviedb.org/3/discover/movie?api_key=38b4b30dd5b7d3be47362aff9acced98";
            fetch(apiURL)
                .then((res) => res.json())
                .then((data) => setMovieList(data.results))
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    }

    useEffect(() => {
        getMovie()
    },[])

    console.log(movieList)

    return (
        <section className="grid movieGrid">
            
            {movieList.map((movie) => (
                <a>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}/>
                        
                        <h2>{movie.title}</h2>
                    <section>
                        <p>{movie.overview}</p>
                    </section>
                </a>
                    
                ))}
        </section>
    )
  }

      

//   function defaultApi(
//     // fetcher en bestemt antall datating når siden lastes opp
//   )


//   function searchFunction(

//     //fetch og filterer gjennom man searcher
//   )