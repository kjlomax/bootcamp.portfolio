import Project from '../components/Project';
import React from 'react';
import pic from '../assets/cardReaderExample.png';

const examplePic1 = pic;

const project1 ={
    title: 'Tarot Card Reader',
    img: examplePic1,
    deploy: 'https://esaiphillips.github.io/Daily-Listening/',
    repo: 'https://github.com/EsaiPhillips/Daily-Listening'
};
const project2 ={

}

export default function Portfolio() {
    return (
        <>
        <h1>Portfolio</h1>
        <Project title={project1.title} img={project1.img} deploy={project1.deploy} repo={project1.repo}/>
        
        </>
    )
}
