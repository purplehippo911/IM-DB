// https://api.themoviedb.org/3/movie/550?api_key=38b4b30dd5b7d3be47362aff9acced98

import { useStore } from '@nanostores/react'
import { $data, addData } from '../stores/store'

export default function movieApiRequest() {
    const apiData = useStore($data)
    const apiURL = "https://api.themoviedb.org/3/movie/550?api_key=38b4b30dd5b7d3be47362aff9acced98&append_to_response=videos,images"
    
    const params = {
        genres: "",
        id: "",
        originalTitle: "",
        overview: "",
        originalLanguage:"",
        posterPath: "",
        release_date: "",
        runtime: ""
    }
    
    // Construct the URL with parameters
    ""
    const url = new URL(apiURL);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    ""
    // Make a GET request to the API
    fetch(url)
        .then(response => {
            // Check if the request was successful.
            if(!response)
                throw Error("Network response was not ok!")
            return response.json()
        })
        .then(data => {
            // Handle the data returned by the API
            // Perform any additional processing or rendering here
            addData(data);
            console.log(apiData)

        })
        .catch(error => {
            // Handle errors that may occur during the request
            console.error("There was a problem with the fetch operation:", error)
        })

}

