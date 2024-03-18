import TypedComponent from "@components/TypedComponent"
import Image from "next/image"

export default function About() {
    return(
        <article className="article--about-me">
            <section className="about-me__card about-me__card--hero">
                <div className="container col">
                    <div>
                        <TypedComponent />
                    </div>
                    <p>
                    Find thousands of movies, meant just for the occasion.
                    </p>
                </div>
            </section>

            <section className="about-me__card about-me__card--profile">
                <div className="container col">
                    <h2>Made by</h2>
                    <a href="https://purplehipposwebsite.netlify.app">
                        <Image 
                            src="/icons/Yellow Muggie.png"
                            alt="Yellow Muggie profile icon"
                            width="200"
                            height="200"
                        />
                        <p>Muggie</p>
                    </a>
                </div>

            </section>
        </article>
    )
}