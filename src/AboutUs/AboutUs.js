import React from 'react'
import {Container} from "react-bootstrap"
import "./AboutUs.css"

const AboutUs = () => {
  return (
    < div id="about">
    <Container className="aboutus-container1" >
    <div className="about-text-wrapper">
<h1>Welcome to [Your Brand Name],</h1>
<p>Where fashion meets passion!</p>
<p>At [Your Brand Name], we believe clothing is more than just fabric—it's an expression of who you are. Established in [Year], we set out with a mission to bring high-quality, trendy, and affordable clothing to fashion-forward individuals around the world.</p>
    </div>
    <div className='about-img-wrapper'>
<img alt=""/>
    </div>
    </Container>

    <Container className="aboutus-container1">
    <div className='about-img-wrapper'>
<img alt=""/>
    </div>

    <div className="about-text-wrapper">
<h1>Who We Are</h1>
<p>We are a team of fashion enthusiasts, designers, and creators who live and breathe style. Our collections are carefully curated with the latest trends in mind, ensuring that every piece reflects the unique tastes and diverse lifestyles of our customers. From classic staples to bold statement pieces, we offer something for everyone.</p>
    </div>
</Container>

<Container className="aboutus-container1">
    <div className="about-text-wrapper">
<h1>Our Vision</h1>
<p>We aim to revolutionize the fashion industry by blending sustainability with style. Our goal is to make sure you look and feel good, while making conscious fashion choices. We are committed to using ethically sourced materials, sustainable production methods, and fair trade practices to reduce our impact on the environment.</p>
 </div>
    <div className='about-img-wrapper'>
<img alt=""/>
    </div>
    </Container>

    <Container className="aboutus-container1">
    <div className='about-img-wrapper'>
<img alt=""/>
    </div>

    <div className="about-text-wrapper">
<h1>Why Shop With Us?</h1>
<p>
    <li> <span className='about-span'>Quality You Can Trust:</span> Every product is crafted with premium materials, designed to last. </li>
<li><span className='about-span'>Affordable Fashion:</span> Looking stylish shouldn't break the bank. We offer competitive pricing without compromising on quality.</li>
<li><span className='about-span'>Inclusive Sizing:</span> Fashion is for everyone! We offer a wide range of sizes to make sure everyone finds something they love.</li>
<li><span className='about-span'>Fast & Reliable Shipping:</span> Wherever you are, we’ll get your favorite pieces to your door quickly.</li>
<li><span className='about-span'>Excellent Customer Service:</span> Your satisfaction is our top priority. Our friendly support team is here to assist you every step of the way.</li>
</p>
 </div>
</Container>

<Container className="aboutus-container1">
    <div className='about-img-wrapper'>
<img alt=""/>
    </div>

    <div className="about-text-wrapper">
<h1>Our Promise</h1>
<p>
We are more than just a clothing brand—we’re a community. At [Your Brand Name], we encourage individuality, creativity, and self-expression. Whether you're looking for casual wear, work attire, or a special-occasion outfit, we are here to help you find the perfect look.
</p>
<p>Thank you for choosing [Your Brand Name]. We are excited to be part of your style journey!</p>
 </div>
</Container>
    </div>
  )
}

export default AboutUs