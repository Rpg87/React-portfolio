import './index.scss';

import React, { useState, useEffect } from 'react';


const VibrantLines = () => {
    const [isMusicPlaying, setMusicPlaying] = useState(false);

    // Function to toggle music play state
    const toggleMusic = () => {
        setMusicPlaying(!isMusicPlaying);
    };

    useEffect(() => {
        // Function to start playing music
        const playMusic = () => {
            // Your logic to play the music here
            console.log('Music is playing');
        };

        // Function to stop playing music
        const stopMusic = () => {
            // Your logic to stop the music here
            console.log('Music stopped');
        };

        // Play or stop the music based on isMusicPlaying state
        if (isMusicPlaying) {
            playMusic();
        } else {
            stopMusic();
        }
    }, [isMusicPlaying]);

    return (
        <> <div className="vibrant-lines-container">
            <div className={`sound-wave vibrant-line ${isMusicPlaying ? 'vibrating' : ''}`} />
            <div className={`vibrant-line ${isMusicPlaying ? 'vibrating' : ''}`} />
            <div className={`vibrant-line ${isMusicPlaying ? 'vibrating' : ''}`} />
        </div>
            <div> <button onClick={toggleMusic}>{isMusicPlaying ? 'Turn Off' : 'Turn On'}</button></div> </>
    );
};

export default VibrantLines;
