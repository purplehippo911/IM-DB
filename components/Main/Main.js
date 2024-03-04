import { useEffect } from "react"
import movieApiRequest from "@utils/movieApiRequest";

export default function Main() {

    useEffect(() => {
        movieApiRequest()
    },[])


    return (
        <section>
            <div className="container col">
                <h1 className="title">Find your favourite</h1>

            <select id="genre" name="Genre"> 
                <option value="all">All</option>
                <option value="adventure">Adventure</option>
                <option value="action">Action</option>
                <option value="comedy">Comedy</option>
                <option value="fantasy">Fantasy</option>
            </select>
            </div>
        </section>
    )
}