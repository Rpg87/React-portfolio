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
                    <p>Mi nombre es Raquel, un espíritu curioso que ha emprendido un emocionante viaje desde el mundo de los seguros a la apasionante carrera de desarrollo web.</p>  <p>Durante siete años, desempeñé un papel esencial en Línea Directa, ascendiendo mientras demostraba mi entusiasmo por el aprendizaje y la responsabilidad. Mi experiencia en liderazgo, comunicación efectiva y negociación me ha preparado para esta nueva etapa.</p>  <p>Ahora, como junior web developer, estoy comprometida a aplicar mis habilidades de resolución de problemas, autoaprendizaje y colaboración en proyectos web innovadores. ¡Estoy emocionada por explorar este emocionante nuevo capítulo en la tecnología y seguir creciendo en un entorno inspirador! </p>



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