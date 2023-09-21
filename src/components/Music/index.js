import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';
import song1 from '../../assets/music/saltillo-002.mp3';
import song2 from '../../assets/music/saltillo-hollow.mp3';
import song3 from '../../assets/music/saltillo-opening.mp3';
import song4 from '../../assets/music/chanson.mp3';



const Music = () => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);


    const songs = [song1, song2, song3, song4];
    const [currentSongIndex, setCurrentSongIndex] = useState(0);

    const playPauseHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const nextSongHandler = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
        if (isPlaying) {
            audioRef.current.play();
        }
    };

    // const prevSongHandler = () => {
    //     setCurrentSongIndex(
    //         (prevIndex) => (prevIndex - 1 + songs.length) % songs.length
    //     );
    //     if (isPlaying) {
    //         audioRef.current.play();
    //     }
    // };



    return (

        <div >
            <audio ref={audioRef} src={songs[currentSongIndex]}></audio>
            <div className='btn-play'>

                <FontAwesomeIcon onClick={playPauseHandler} icon={faCirclePlay} style={{ color: '#ffd700' }} />

            </div>
        </div>




    )
}

export default Music;