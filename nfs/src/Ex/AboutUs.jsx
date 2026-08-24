import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';

const AboutUs = () => {
    
    return (
        <>
            {/*--------------------    NavBar   --------------------- */}
            <Navbar />
            {/* -------------------- Main Section ------------------- */}
            <div class="aboutus__container">
                <h1 id="ln">About NFS Car Review and Information System</h1>
                <br />
                <p>
                    Welcome to NFS Car Review and Information System, your ultimate destination for comprehensive car reviews and insightful
                    automotive information. Founded and owned by Ridham Patel, our platform is dedicated to providing enthusiasts and car
                    buyers with detailed insights into the world of automobiles.
                </p>
                <p>
                    At NFS, we understand the significance of making informed decisions when it comes to purchasing a vehicle. With a
                    passion for cars and a commitment to excellence, we strive to deliver accurate, unbiased, and up-to-date reviews on a
                    wide range of vehicles, from sleek sedans to powerful SUVs and everything in between.
                </p>
                <p>
                    Our team of expert reviewers and automotive enthusiasts meticulously test and analyze each vehicle, examining
                    performance, safety features, technology, design, and much more. We believe that by offering comprehensive evaluations,
                    we empower our audience to make educated choices that align with their preferences and lifestyle.
                </p>
                <p>
                    Beyond reviews, NFS Car Review and Information System serves as a hub for all things automotive. Whether you're
                    researching the latest trends in the industry, comparing different models, or seeking advice on maintenance and repairs,
                    our platform is your go-to resource.
                </p>
                <p>
                    Driven by a commitment to transparency and integrity, we prioritize the needs and interests of our audience above all
                    else. We believe that every car purchase should be a rewarding and fulfilling experience, and we are here to guide you
                    every step of the way.
                </p>
                <p>
                    Thank you for choosing NFS Car Review and Information System as your trusted source for all things automotive. Join us
                    on our journey as we explore the exciting world of cars together.
                </p>
                <p id="ln">
                    <strong>
                        Ridham Patel
                        <br />
                        Founder & Owner, NFS Car Review and Information System
                    </strong>
                    <br />
                    <Footer />
                </p>
            </div>
        </>
    );
};

export default AboutUs;
