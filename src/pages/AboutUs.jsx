import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faCode, faCompass } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div> 
      <style>
      {`
      .about-container {
        width: 90%;
        margin: 0 auto;
        padding: 50px 0;
      }

      .header {
        text-align: center;
        padding: 20px;
      }

      .header-title {
        font-size: 2.5rem;
        margin-bottom: 15px;
      }

      .header-subtitle {
        font-size: 1.2rem;
        color: #666;
      }

      .buttons {
        margin-top: 20px;
      }

      .button {
        text-decoration: none;
        color: #007bff;
        margin: 0 10px;
        padding: 10px 20px;
        border: 1px solid #007bff;
        border-radius: 5px;
      }

      .main-image {
        text-align: center;
        margin-top: 20px;
      }

      .image {
        max-width: 100%;
        height: auto;
      }

      .features, .services, .testimonial, .insights {
        text-align: center;
        margin-top: 40px;
        padding: 0 10px;
        color: #333;
      }

      .features-grid, .services-grid, .articles {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        margin-top: 20px;
      }

      .feature, .service, .article {
        text-align: center;
        padding: 10px;
      }

      .feature-image, .article-image {
        max-width: 100%;
        height: auto;
        margin-bottom: 10px;
      }

      .feature-title, .service-title, .article-title {
        font-size: 1.3rem;
        margin-bottom: 8px;
      }

      .feature-description, .service-description, .article-description {
        color: #666;
      }

      .service-icon {
        font-size: 2rem;
        color: #007bff;
        margin-bottom: 10px;
      }

      /* Mobile Responsive Design */
      @media (max-width: 768px) {
        .header-title {
          font-size: 2rem;
        }

        .header-subtitle {
          font-size: 1rem;
        }

        .buttons {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .button {
          margin: 5px 0;
          padding: 8px 16px;
        }

        .features-grid, .services-grid, .articles {
          grid-template-columns: 1fr;
        }

        .feature-title, .service-title, .article-title {
          font-size: 1.1rem;
        }

        .feature-description, .service-description, .article-description {
          font-size: 0.9rem;
        }

        .platform-text {
          font-size: 1rem;
        }

        .testimonial-item {
          padding: 15px;
          font-size: 0.9rem;
        }
      }
      `}
      </style>
      
      <div className="about-container">
        <header className="header">
          <h1 className="header-title">Crafting Experiences with Code</h1>
          <p className="header-subtitle">Welcome to My Portfolio</p>
          <div className="buttons">
            <a href="#projects" className="button">View Projects</a>
            <a href="#contact" className="button">Contact Me</a>
          </div>
        </header>

        <section className="main-image">
          <motion.img
            src="https://storage.googleapis.com/a1aa/image/OijJLPKl3ZJkINs5FjVbmqvLelgbQpq2O1YRfsJI7AZbUSqTA.jpg"
            alt="Creative professional with colorful background"
            className="image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </section>

        <section className="features">
          <h2>Core Skills</h2>
          <div className="features-grid">
            {[
              {
                imgSrc: "https://storage.googleapis.com/a1aa/image/gOAOf9rkn33SSi4IeHC9CX4MUX8k4LeZbgEfe8wrfKhlHlk6E.jpg",
                title: "Front-End Development",
                description: "Creating responsive, visually appealing interfaces.",
              },
              {
                imgSrc: "https://storage.googleapis.com/a1aa/image/TWsvfzhPtl1mGaEHxU3YAVeK8tkEcUS8sLK4F2Ju8gHaUSqTA.jpg",
                title: "Back-End Development",
                description: "Building robust and scalable server-side logic.",
              },
              {
                imgSrc: "https://storage.googleapis.com/a1aa/image/EwW1vhga7bpaHJEqL01m7Gz2Rz6dKp1ygzUu5kLbNLePKJ1JA.jpg",
                title: "UI/UX Design",
                description: "Designing intuitive and engaging user experiences.",
              },
            ].map((feature, index) => (
              <div key={index} className="feature">
                <img src={feature.imgSrc} alt={feature.title} className="feature-image" />
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="services">
          <h2>Specialized Services</h2>
          <div className="services-grid">
            {[
              {
                icon: faChartLine,
                title: "Data Visualization",
                description: "Transform data into insights with compelling visuals.",
              },
              {
                icon: faCode,
                title: "Custom Development",
                description: "Bespoke solutions tailored to project requirements.",
              },
              {
                icon: faCompass,
                title: "Project Guidance",
                description: "Consult on best practices for efficient project delivery.",
              },
            ].map((service, index) => (
              <div key={index} className="service">
                <FontAwesomeIcon icon={service.icon} className="service-icon" />
                <h4 className="service-title">{service.title}</h4>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="testimonial">
          <h2>Client Testimonials</h2>
          <div className="testimonial-container">
            <div className="testimonial-item">
              <img
                src="https://storage.googleapis.com/a1aa/image/UglmD4DQBF7lChi4m3lTbnRlKDMzPw46zdT65Z4Ug7MJlk6E.jpg"
                alt="Client"
                className="testimonial-image"
              />
              <p className="testimonial-text">
                “The project exceeded our expectations. A seamless process from start to finish.”
              </p>
              <p className="testimonial-author">
                Alex Chen <br />
                Project Manager
              </p>
            </div>
          </div>
        </section>

        <section className="insights">
          <h2>Recent Articles</h2>
          <div className="articles">
            {[
              {
                imgSrc: "https://storage.googleapis.com/a1aa/image/Zyo1k2UCl86yI9D29OmZ8zDtnTziQFVENPRDXszIe02QKJ1JA.jpg",
                title: "Top Tips for Successful UI/UX Design",
                description: "Explore key strategies for engaging and effective design.",
              },
              {
                imgSrc: "https://storage.googleapis.com/a1aa/image/rLxhwwJSCeXiL6y7LRwtyOOOIIFfqSrTdIwYg5bojhWcUSqTA.jpg",
                title: "Responsive Web Design Techniques",
                description: "Best practices for optimizing across all devices.",
              },
              {
                imgSrc: "../public/_image/OIP.jpg",
                title: "JavaScript Frameworks for Beginners",
                description: "A beginner's guide to the most popular frameworks.",
              },
            ].map((article, index) => (
              <div key={index} className="article">
                <img src={article.imgSrc} alt={article.title} className="article-image" />
                <h3 className="article-title">{article.title}</h3>
                <p className="article-description">{article.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
