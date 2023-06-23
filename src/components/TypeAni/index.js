import './index.scss';
import { TypeAnimation } from 'react-type-animation';



const TypeAni = () => {

    return (
        <span className='type'>
            <TypeAnimation className='ani'
                sequence={[
                    'code dreamer',
                    2000,
                    ' web developer',
                    2000,
                    'feliz de que estés aquí',
                    2000,
                    'una  junior con ganas de aprender',
                    2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}

            />
        </span>
    )

}

export default TypeAni;