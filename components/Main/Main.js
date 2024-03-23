import { useEffect, useState } from "react";
import NetflixSlider from "../NetflixSlider/NetflixSlider";
import SearchBar from "@components/SearchBar/SearchBar";


export default function Main() {
    const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
        setIsLoading(false);
    }, []);

    return (
        <article>
            <div className="container col">
                <h1 className="hero__title">Find your favourites</h1>
                {/* <section id="filter">

                    <picture className="icons-container">
                        <img src="/icons/Right arrow.png" className="icons icons__arrow icons__arrow--right"/>
                    </picture>
                   
                    All

                    <picture className="icons-container">
                        <img src="/icons/Right arrow.png" className="icons icons__arrow icons__arrow--left"/>
                    </picture>

                    
                </section> */}

                <SearchBar/>
                
            </div>
            {isLoading ? (
                <div>Countries are loading...</div>
            ) : (
                <NetflixSlider/>
            )}
        </article>
    );
}