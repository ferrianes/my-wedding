// components/BackgroundMusic.js
'use client'

import React, { useEffect, useRef, useState } from 'react';

const BackgroundMusic = ({ src, children }) => {
    const audio = useRef()

    // useEffect(() => {
    //     if (typeof playFromParent === 'function') {
    //         // Call the callback function from props and pass the data
    //         playFromParent(data);
    //     }
    // }, [playFromParent])

    const modifiedChildren = React.Children.map(children, child => {
        // Check if it's a valid React element
        if (React.isValidElement(child)) {
            // Clone the child element with additional props
            return React.cloneElement(child, { audio: audio });
        }
        return child;
    });
    return (
        <div>
            <audio id="audio" src={src} loop ref={audio} />
            {modifiedChildren}
        </div>
    )
};

export default BackgroundMusic;
