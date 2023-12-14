// components/BackgroundMusic.js
'use client'

import { useEffect, useRef, useState } from 'react';

const BackgroundMusic = ({ src }) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const audio = useRef()

    const play = () => {
        if (isPlaying) {
            audio.current.pause()
            setIsPlaying(false)
        } else {
            audio.current.play()
            setIsPlaying(true)
        }
    }

    return (

        <div className="fixed max-w-md bottom-4 right-4">
            <audio id="audio" src={src} loop ref={audio} />
            <button onClick={play} className="bg-white rounded-full p-2 shadow-md hover:shadow-lg focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    )
};

export default BackgroundMusic;
