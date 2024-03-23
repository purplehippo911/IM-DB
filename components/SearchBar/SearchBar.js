import { useEffect, useState } from "react"


export default function SearchBar() {

    const [searchContent, setSearchContent] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [movieList, setMovieList] = useState([])
     
    const getData = (searchContent) => {
        // fetch movie api
        const apiURL = `https://api.themoviedb.org/3/search/movie?query=${searchContent}r&api_key=38b4b30dd5b7d3be47362aff9acced98`
        fetch(apiURL)
            .then(res => res.json())
            .then(data => {
                setMovieList(data);
            })
            .catch(error => console.error("Error fetching data!", error));
    }

    const findMovie = (e) => {
        const value = e.target.value.toLowerCase().trim();
        setSearchContent(value);
        console.log(searchContent);

        const data = getData(searchContent);
        console.log(data);

        if (searchContent && searchContent.length > 0 && countries.length !== 0) {

            const filteredCountries = countriesArray.filter(country => 
                country[0].toLowerCase().includes(value)
            );
            if(filteredCountries){
                setSearchResults(filteredCountries)
            } else {
                setSearchResults(countries)
            } 
        } else {
            setSearchResults(movie)
        }


    }
    
        
    return (
        <section id="search-bar">
            <div className="container container--search-bar">
                <input placeholder="Search Movie" defaultValue={searchContent} onChange={findMovie}/>
            </div>
        </section>
    )
}