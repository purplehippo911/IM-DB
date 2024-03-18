import Link from "next/link";
import Image from "next/image";
import MovieList from "@components/MovieList/MovieList";

export default function Movie() {
    return (
        <>
         <Link href="/" className="">
            <picture className="w-10">
                <Image 
                    src="/icons/Right arrow.png" 
                    alt="arrow pointing to the left"
                    width={70}
                    height={40}
                />
            </picture>
            <button>Back</button>
        </Link>
        
        <br/>
        
        <MovieList/>
        </>
    )
}