// import React, { useState } from 'react';
// import { useLocation, Link } from 'react-router-dom';
import './App.css'; // Import CSS file
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    // const location = useLocation();


    
    return (
        <div>
            <header className="header">
            <div className="logo"></div> 
            <div></div>  <h1>Welcome to PawPatrol !! </h1>                
                 <Link to="/loginScreen" className="login-btn">Login</Link>
            </header>

            

                  {/* Main Section */}
            <section className="main-section">
                <div className="walking-img">                    
                   <div className="photo-caption">
                   <h2 className='img-txt-title'>Walking Servces</h2>
                        <p className='img-txt-content'>Dedicated dog walkers are passionate about providing essential exercise and companionship for furry friends. With a deep understanding of canine behavior and needs, they offer tailored walking experiences to keep dogs healthy, happy, and engaged.</p>
                    </div>
                </div>
            </section>
            <section className="main-section">
                <div className="vet-img">                    
                   <div className="photo-caption">
                   <h2 className='img-txt-title'>Medical Servces</h2>
                        <p className='img-txt-content'>Great veterinarians are dedicated professionals who provide expert care for animals of all kinds. With extensive medical knowledge and a genuine love for animals, they diagnose and treat a wide range of health issues, ensuring the well-being of their patients.</p>
                    </div>
                </div>
            </section>
            
            <section className="main-section">
                <div className="groomer-img">
                     <div className="photo-caption">
                     <h2 className='img-txt-title'>Grooming Servces</h2>
                        <p className='img-txt-content'>Amazing dog groomers are highly skilled professionals who expertly groom dogs of all breeds and sizes. With a keen eye for detail and a deep understanding of grooming techniques, they create a calm and comfortable environment for their furry clients. </p>                      
                    </div>
                </div>
            </section>

        </div>
    );
};

export default LandingPage;