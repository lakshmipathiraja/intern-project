import React from 'react'
import Hero from './Hero/Hero';
import About from './About/About';
import Course from './Course/Course';
import Feature from './Feature/Feature';
import Review from './Review/Review';
import ResponsiveNav from './Navbar/ResponsiveNav';
import Footer from './Footer/Footer';

const Home = () => {
  return (
    <div >
      <ResponsiveNav />
      <Hero />
      <About />
      <Course />
      <Feature />
      <Review />
      <Footer />

    </div>
  );
};

export default Home;