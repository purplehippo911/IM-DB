import { useEffect, useState } from "react";

// swiper related imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function NetflixSlider() {
    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        getMovie()
       
    },[])

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

    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation={true}
            loop={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            keyboard={true}
            effect="coverflow"
            modules={[Autoplay, Navigation, EffectCoverflow]}
        
         >
            
            {movieList.map((movie) => (
                <SwiperSlide
                key={movie.id}>
                    <a className="swiper-slide__container">
                        <picture className="swiper-slide__picture">
                            <img className="swiper_slide__img" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}/>
                        </picture>
                    
                        <section className="swiper-slide__section">
                            <h2 className="swiper-slide__title">{movie.title}</h2>
                            <picture className="icons-container">
                                <picture className="icon-wrapper icon-wrapper--bookmark">
                                    <img className="icons" src="/icons/Bookmark icon.svg" alt="bookmark icon"/>
                                </picture>
                                <picture className="icon-wrapper icon-wrapper--thumbs-up">
                                    <img className="icons" src="/icons/Thumbs up Icon.png" alt="like icon"/>
                                </picture>
                            </picture>
                        </section>
                    </a>
                </SwiperSlide>
                    
                ))}
        </Swiper>
    )
  }