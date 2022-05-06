import React, { Component } from 'react';


export default class About extends Component {

    render() {
        let resumeData = this.props.resumeData;
        return (
            <section className="about_area_two bg_color" id='about'>
                <div className='row'>
                    <div className='three columns'>
                        <img className='logo' src='images/logo.png' alt='logo' />
                    </div>
                    <div className='nine columns main-col'>
                        <h2>About Me</h2>
                        <p>
                            {
                                resumeData.aboutme
                            }
                        </p>
                        <div className='row'>
                            <div className='columns contact-details'>
                                <h2>Contact</h2>
                                <p className='address'>
                                    <span>{resumeData.name}</span>
                                    <br></br>
                                    <span> {resumeData.address}</span>
                                    <br></br>
                                    <span>{resumeData.website}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
                    );
        }
}


