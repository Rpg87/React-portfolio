import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])


    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 'ó', 'c', 'e', 'm', 'e']}
                            idx={15} />
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reprehenderit eligendi sunt, fugit odit ratione, laborum quae ea, explicabo laudantium tempore distinctio! Dolore provident sapiente consectetur voluptatibus laudantium eligendi exercitationem?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore neque quibusdam eligendi dolore illo nulla eum ex ea velit, dignissimos rerum ipsum corporis omnis, nisi fugit incidunt facere accusantium. Animi?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci aspernatur asperiores natus amet nostrum iusto iure, aperiam exercitationem veniam veritatis inventore ratione eaque soluta, voluptatibus nesciunt tenetur quibusdam ducimus sint?</p>

                </div>

                <div className='stage-cube-cont'>
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faNodeJs} color='#669F5B' />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default About;