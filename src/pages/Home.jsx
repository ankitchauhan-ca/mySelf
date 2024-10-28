import React from 'react';
import '../static/HomePage.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Image with overlay */}
      <div className="image-container">
        <img src="../public/_image/first.jpg" alt="A psychologist sitting on a chair, writing in a notebook, with a plant in the background" />
        <div className="text-overlay">
          <h1 className="animated-text">Welcome to Psychologist</h1>
          <p className="animated-subtext">Your mental wellness is our priority</p>
        </div>
      </div>

      {/* Offer Section */}
      <section id="offer" className="section">
        <h2>Our Offer</h2>
        <p>We provide personalized mental health services tailored to your unique needs. Whether you're seeking therapy, counseling, or psychological assessments, we are here to support your journey to wellness.</p>
      </section>

      {/* Features Section */}
      <section id="features" className="section">
        <h2>Features</h2>
        <p>Our platform offers easy appointment scheduling, video consultations, and secure messaging to help you stay connected with your psychologist. We also provide real-time progress tracking and mental health resources.</p>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section">
        <h2>Portfolio</h2>
        <p>Explore some of the case studies and success stories from our past clients. See how our psychological expertise has positively impacted lives around the world.</p>
      </section>

      {/* References Section */}
      <section id="reference" className="section">
        <h2>References</h2>
        <p>Here are testimonials from clients and industry experts who have experienced our services. Learn about the value we've brought to their lives and careers.</p>
      </section>

      {/* About Us Section */}
      <section id="about" className="section">
        <h2>About Us</h2>
        <p>We are a team of experienced psychologists and mental health professionals dedicated to providing compassionate, evidence-based care. Our mission is to help you thrive mentally, emotionally, and physically.</p>
      </section>

      {/* Team Section */}
      <section id="team" className="section">
        <h2>Our Team</h2>
        <p>Meet the experts behind our services. Our team consists of licensed psychologists, counselors, and mental health experts with years of experience in the field.</p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <p>If you have any questions or would like to schedule a consultation, feel free to reach out. We are here to support you on your mental health journey.</p>
      </section>
    </div>
  );
};

export default Home;
