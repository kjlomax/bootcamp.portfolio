import Footer from '../components/Footer';
import Project from '../components/Project';
import React from 'react';


const project1 ={
    title: 'Tarot Card Reader',
    img: <>
    <iframe src="https://giphy.com/embed/fw7jKYJqNLeim31y8S" width="480" height="480"  className="giphy-embed"></iframe><p><a href="https://giphy.com/gifs/crystal-ball-denyse-mitterhofer-dmitterhofer-fw7jKYJqNLeim31y8S">via GIPHY</a></p>
    </>, 
    deploy: 'https://esaiphillips.github.io/Daily-Listening/',
    repo: 'https://github.com/EsaiPhillips/Daily-Listening'
};
const project2 ={
    title: 'ReadMe Generator',
    img: <><iframe src="https://giphy.com/embed/3oxRmsoHngzymwDl2E" width="480" height="480" className="giphy-embed"></iframe><p><a href="https://giphy.com/gifs/animation-flower-2d-3oxRmsoHngzymwDl2E">via GIPHY</a></p></>,
    repo: 'https://github.com/kjlomax/challenge-7'
};


export default function Portfolio() {
    return (
        <>
        <h2>Portfolio</h2>
        <Project title={project1.title} img={project1.img} deploy={project1.deploy} repo={project1.repo}/>
        <Project title={project2.title} img={project2.img} repo={project2.repo}/>
        <Footer/>
        </>
    )
}
