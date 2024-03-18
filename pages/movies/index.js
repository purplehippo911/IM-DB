import Link from "next/link";
import Image from "next/image";


export default function Movies() {
    return (
        <Link href="/">
            <picture>
                <Image 
                    src="/icons/Right arrow.png"
                    alt="arrow pointing to the left to indicate how to go back to home"
                    width={70}
                    height={40}
                />
            </picture>
            <button> Back to homepage </button>
        </Link>
    );
}