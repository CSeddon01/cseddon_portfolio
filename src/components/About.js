import React from 'react';

export default function About({ appName, appInfo }) {

    return (
        <section className='about_area_two bg_color' id='about'>
            <div className='container'>
                <div className='row align-items-center flex-row-reverse'>
                    <div className='col-lg-6'>
                        <div className='about_area_content_two'>
                            <div className='section_title_two undefined'>
                                <h6>Who am I?</h6>

                            </div>
                            <p>I'm Christine Seddon. Based in Austin, Texas I am a software developer with strong business experience.  I specialize in helping businesses grow!</p>
                        </div>
                        <ul className='nav nav-tabs' role='tablist'>
                            <li className='nav-item'>
                                <a className='nav-link active' data-toggle='tab' href="#" role='tab' aria-controls='home' aria-selected='true'>Professional</a>
                            </li>
                        </ul>
                        <ul className='nav nav-tabs' role='tablist'>
                            <li className='nav-item'>
                                <a className='nav-link active' data-toggle='tab' href="#" role='tab' aria-controls='home' aria-selected='true'>Self-motivated</a>
                            </li>
                        </ul>
                        <ul className='nav nav-tabs' role='tablist'>
                            <li className='nav-item'>
                                <a className='nav-link active' data-toggle='tab' href="#" role='tab' aria-controls='home' aria-selected='true'>Lifelong Learner</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}



