import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import WHP from "../assets/images/wehelpaustin.jpg";
import ES1 from "../assets/images/ES1.jpg"
import PWA from "../assets/images/PWA.jpg";
import SMW from "../assets/images/SocietyofMW.jpg";
import TP from "../assets/images/trackerpic.jpg";



export default function Portfolio() {
    return (
<>
        <Carousel fade>
        <Carousel.Item> 
                <img
                    style={{padding: 8}}
                    className='d-block w-100'
                    src={WHP}
                    alt='We Help Austin'
                    href="https://we-help-austin.herokuapp.com/"
                    
                />
                <Carousel.Caption className='d-none d-md-block bg-dark mb-4'>
                    <h3>We Help Austin</h3>
                    <p><a href="https://github.com/CSeddon01/we-help-austin">See my code here</a>
                    Community building website for Austin built with MySQl, JS, and Bootstrap
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={ES1}
                    alt='Eloquent Shopping'
                />

                <Carousel.Caption className='d-none d-md-block bg-dark mb-4'>
                    <h3>Eloquent Shopping</h3>
                    <p><a href="https://github.com/CSeddon01/Eloquent_Shopping">See my code here</a>
                    Back end of an e-commerce site built with Sequelize and MySQL
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={PWA}
                    alt='Budget Tracker'
                />

                <Carousel.Caption className='d-none d-md-block bg-dark mb-4'>
                    <h3>PWA Budget Tracker</h3>
                    <p><a href="https://github.com/CSeddon01/PWA_Budget_Tracker">See my code here</a>
                    Budget Tracker using a PWA that allows users to keep track of their budget without a data/internet connection.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={SMW}
                    alt='SocietyofMartha'
                    href="https://cseddon01.github.io/Scholarship-App/"
                />

                <Carousel.Caption className='d-none d-md-block bg-dark mb-4'>
                    <h3>Society of Martha Washington</h3>
                    <p><a href="https://github.com/CSeddon01/Scholarship-App">See my code here</a>
                    Website that allow students to have better access to apply for the annual scholarships. 
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={TP}
                    alt='Staff Tracker'
                />

                <Carousel.Caption className='d-none d-md-block bg-dark mb-4'>
                    <h3>Staff Tracker App</h3>
                    <p><a href="https://github.com/CSeddon01/Staff_Tracker">See my code here</a>
                    CLI application to manage a company's database using Node.js, Inquirer, and MySQL  
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        
        </>
    )
}
