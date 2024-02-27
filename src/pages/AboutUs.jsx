import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/about/Footer'

function AboutUs() {
  return <>
    <Navbar />
    <main>
      <section>
        <h1>Welcome to Sokari</h1>

        <p>
          At Sokari, we believe that clothing is more than just fabric stitched together; it's a form of expression, a reflection of your personality, and a way to make a statement without saying a word. Our brand is built on the values of creativity, authenticity, and inclusivity.
        </p>

        <h2>Our Story</h2>
        <p>
           Sokari was born out of a passion for fashion and a desire to create something unique and meaningful. Founded by a group of dedicated designers, our journey began with a simple idea: to redefine the way people think about clothing. From our humble beginnings to where we are today, our commitment to innovation and quality craftsmanship has remained unwavering.
        </p>

        <h2>Mission and Values</h2>
        <p>
          At Sokari, our mission is to empower individuals to embrace their individuality and express themselves through fashion. We believe in celebrating diversity, embracing imperfections, and promoting self-confidence. Our values of integrity, sustainability, and social responsibility guide everything we do.
        </p>

        <h2>Quality and Sustainability</h2>
        <p>
          Quality is at the heart of everything we create. We meticulously select the finest materials and work with skilled artisans to ensure that each piece is crafted to perfection. Sustainability is also a core focus for us. We are committed to reducing our environmental footprint by using eco-friendly materials and ethical production practices.
          </p>

        <h2>Our Team</h2>
        <p>
          Meet the passionate individuals behind Sokari. From our talented designers to our dedicated customer service team, each member plays a vital role in bringing our vision to life. Together, we work tirelessly to ensure that every Sokari experience is exceptional.
        </p>  
      </section>

      <section>
        <h2>Contact us</h2>
        <a href="">FACEBOOK</a>
        <a href="">INSTEGRAM</a>
        <a href="">WHATSAPP</a>
      </section>
      
    </main>
    
    <footer>
      <Footer />
    </footer>


    </>
}

export default AboutUs