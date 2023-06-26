import Loader from 'react-loaders';
import './index.scss';
import React, { useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import { useState } from 'react';
import portfolioData from '../../data/portfolio.json';
import RenderProjects from './RenderProjects';

const Portfolio = () => {




    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => {
            clearTimeout(timer);
        }
    });


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Mi obra".split("")}
                        idx={15} />
                </h1>

            </div>
            <RenderProjects portfolio={portfolioData.portfolio} />

            <Loader type='pacman' />
        </>
    )
};

export default Portfolio;