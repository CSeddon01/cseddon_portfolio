import React from 'react';

export default function About({ appName, appInfo }) {

    return (
        <section className='bg_color' id='about'>
            <div className='container'>
                <div className='row align-items-center flex-row-reverse'>
                    <div className='col-lg-6'>
                        <div className='about_area_content_two'>
                            <div className='section_title_two undefined'>
                                <h6>Welcome!</h6>

                            </div>
                            <p className="text-purple">I'm Christine Seddon. Based in Austin, Texas I am a software developer with strong business background.  I specialize in helping businesses grow!</p>
                        </div>
                        {/* <ul className='nav nav-tabs' role='tablist'>
                            <li className='nav-items'>
                                <a className='nav-link active' data-toggle='tab' href="#" role='tab' aria-controls='home' aria-selected='true' style={{ backgroundColor: "#96e6b3" }}>Professional</a>
                            </li>
                        </ul>
                        <ul className='nav nav-tabs' role='tablist'>
                            <li className='nav-items'>
                                <a className='nav-link active' data-toggle='tab' href="#" role='tab' aria-controls='home' aria-selected='true' style={{ backgroundColor: '#a3d9ff' }}>Self-motivated</a>
                            </li>
                        </ul>
                        <ul className='nav nav-tabs' role='tablist'>
                            <li className='nav-items'>
                                <a className='nav-link active' data-toggle='tab' href="#" role='tab' aria-controls='home' aria-selected='true' style={{ backgroundColor: '#7e6b8f' }}>Lifelong Learner</a>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </section>
    );
}



