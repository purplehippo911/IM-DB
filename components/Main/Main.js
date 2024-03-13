import { useEffect, useState } from "react";
import NetflixSlider from "../NetflixSlider/NetflixSlider";


export default function Main() {
    const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
        setIsLoading(false);
    }, []);

    return (
        <article>
            <div className="container col">
                <h1 className="title">Find your favourites</h1>
                <select id="genre" name="Genre"> 
                    <option value="all">All</option>
                    <option value="adventure">Adventure</option>
                    <option value="action">Action</option>
                    <option value="comedy">Comedy</option>
                    <option value="fantasy">Fantasy</option>
                </select>
            </div>
            {isLoading ? (
                <div>Countries are loading...</div>
            ) : (
                <NetflixSlider/>
            )}
        </article>
    );
}