import React from 'react';
import slides from './slides.json';
import Projects from './Projects';

//Connects the slides to the projects properites
export default function Portfolio() {
    return (
        <div className='container'>
            <div className='row justify-content-around'>
                {slides.map(slides => {
                    return (
                        <Projects
                            key={slides.id}
                            title={slides.title}
                            tech={slides.tech}
                            description={slides.description}
                            img={slides.img}
                            link={slides.link}
                            repo={slides.repo}
                        >
                        </Projects>
                    );
                })}
            </div>
        </div>
    )
};
