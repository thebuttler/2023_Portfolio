import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Loader from 'react-loaders';


const Home = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = [' ','R', 'o', 'n', 'a', 'l', 'd', ' ', 'A', 'r', 'e', 'v', 'a', 'l', 'o'];
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 5000)
    }, [])

    return (
        <>
        <div className='container home-page'>
            <div className='text-zone'>
            <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i, </span>
                <br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                <br/>
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={24}/>
            </h1>
            <h2>Backend Developer / Frontend Developer / Gym Enthusiast </h2>
            <Link to="/contact" className='flat-button'>Contact Me</Link>
            </div>
        </div>

        <Loader type='pacman' />
        </>
    );
}

export default Home;