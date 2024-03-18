import React, { useEffect, useRef } from "react";

import Typed from "typed.js";

export default function TypingText({text}) {
    // Create reference to store the DOM element containing the animation
    const element = useRef(null);

    useEffect(() => {
        const typed = new Typed(element.current, {
            strings: [
                'Movies for nerds...',
                'Movies for datenight',
                'Animes for weebs',
                'Films for Intellectuals...',
                'Movies for Bookworms...',
                'Movies for Techies...',
                'Movies for adventurers...',
                'Movies for School...',
                "Movies for when you're too tired to think of anything...",
                ],
            typeSpeed: 50,
            startDelay: 30,
            shuffle: true,
            loop: true,
            loopCount: Infinity,
            showCursor: true,
            cursorChar: '|',
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <span className="typed-cursor" ref={element} />
    )
}