import Loader from 'react-loaders';
import './index.scss';
// import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';






const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const useForm = useRef()



    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('Gmail', 'template_3s3iovz', useForm.current, 'yD9xDrjksCTYV9_hD')

            .then(() => {
                alert('Mensaje enviado')
                window.location.reload(false)
            },
                () => {
                    alert('Lo siento, algo no salió bien. Vuelve a intentarlo. Gracias.')
                }
            )
    }



    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'á', 'c', 't', 'a', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi itaque ut inventore totam sint rerum veniam commodi blanditiis ducimus numquam error quidem voluptates laudantium quia quis, suscipit fuga, placeat dolores.
                    </p>
                    <div className="contact-form">
                        <form onSubmit={sendEmail} ref={useForm}>
                            <ul>
                                <li className="half">
                                    <input placeholder="Nombre" type="text" name="name" required />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Título"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Mensaje"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="Enviar" />
                                </li>
                            </ul>
                        </form>

                    </div>

                </div>



                <div className="info-map">
                    Raquel Peña
                    <br />
                    Madrid
                    <br />
                    <span>raquel.gonzape3@gmail.com</span>
                </div>

                <div className='map-wrap'>
                    <MapContainer center={[40.554903, -3.332205]} zoom={10} scrollWheelZoom={true} zoomControl={true}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[40.554903, -3.332205]}>
                            <Popup>
                                ¿Quieres trabajar conmigo? :)
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div >
            </div>



            <Loader type='pacman' />
        </>
    )
}



export default Contact;
