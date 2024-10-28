import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const testimonials = [
  {
    img: "../public/_image/Ram.jpg",
    text: "They are a creative force to reckon with. Their innovative ideas and exceptional design sense set them apart in the industry.",
    name: "Ram",
    position: "Customer Experience Lead",
    stars: 5,
  },
  {
    img: "../public/_image/O.jpg",
    text: "Their attention to detail and commitment to excellence is unparalleled. They truly understand the needs of their clients.",
    name: "Krishna",
    position: "Project Manager",
    stars: 5,
  },
  {
    img: "../public/_image/Hanu.jpg",
    text: "A team of professionals who are dedicated to delivering top-notch solutions. Their expertise is evident in every project.",
    name: "Hanuman",
    position: "Technical Lead",
    stars: 5,
  },
];

function Service() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const changeTestimonial = (direction) => {
    setCurrentTestimonial(
      (currentTestimonial + direction + testimonials.length) %
        testimonials.length
    );
  };

  const testimonial = testimonials[currentTestimonial];

  return (
    <div>
      <style>
        {`
          body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            margin: 0;
          }

          .container-service {
            text-align: center;
            max-width: 800px;
            margin: 0 20px;
            width: 100%;
            padding: 20px;
            box-sizing: border-box;
          }

          .title {
            font-size: 36px;
            font-weight: bold;
            color: #333;
            margin-bottom: 10px;
          }

          .subtitle {
            font-size: 16px;
            color: #777;
            margin-bottom: 30px;
          }

          .testimonial {
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            display: flex;
            align-items: center;
            padding: 20px;
            margin-top: 40px;
            position: relative;
            max-width: 600px;
            margin: 0 auto;
            transition: transform 0.4s ease, box-shadow 0.4s ease;
          }

          .testimonial:hover {
            transform: scale(1.03);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
          }

          .testimonial-img {
            border-radius: 10px;
            width: 100px;
            height: 100px;
            object-fit: cover;
            transition: transform 0.4s ease;
          }

          .testimonial-img:hover {
            transform: scale(1.1);
          }

          .testimonial-content {
            margin-left: 20px;
            text-align: left;
            flex: 1;
          }

          .testimonial-text {
            font-size: 16px;
            color: #333;
            margin: 0;
            animation: fadeIn 0.6s ease;
          }

          .name {
            font-size: 14px;
            font-weight: bold;
            color: #333;
            margin-top: 10px;
          }

          .position {
            font-size: 12px;
            color: #777;
          }

          .stars {
            color: #d4a5ff;
            margin-top: 10px;
          }

          .star {
            transition: transform 0.4s ease;
          }

          .star:hover {
            transform: scale(1.3);
            color: #f5b50a;
          }

          .arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: #eee;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .arrow.left {
            left: -50px;
          }

          .arrow.right {
            right: -50px;
          }

          .arrow:hover {
            background-color: #ddd;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .testimonial {
              flex-direction: column;
              text-align: center;
            }
            .testimonial-content {
              margin-left: 0;
              margin-top: 20px;
            }
            .arrow.left,
            .arrow.right {
              left: 10px;
              right: 10px;
            }
          }

          @media (max-width: 480px) {
            .title {
              font-size: 28px;
            }
            .subtitle {
              font-size: 14px;
            }
            .testimonial {
              padding: 15px;
              width: 100%;
            }
            .testimonial-img {
              width: 80px;
              height: 80px;
            }
            .testimonial-text {
              font-size: 14px;
            }
            .name {
              font-size: 12px;
            }
            .position {
              font-size: 10px;
            }
            .arrow {
              width: 25px;
              height: 25px;
            }
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          .service-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            font-family: Arial, sans-serif;
          }

          .portfolio-service {
            max-width: 800px;
            background-image: url(../public/_image/service1.png);
            background-color: transparent;
            padding: 20px;
            margin-top: 50px;
            border-radius: 20px;
            box-shadow: 0 5px 1px rgba(0, 0, 0, 0.1);
            text-align: left;
            animation: fadeIn 0.6s ease;
          }

          .portfolio-title {
            font-size: 32px;
            color: #333;
            text-align: center;
          }

          .portfolio-image {
            width: 100%;
            height: auto;
            border-radius: 10px;
            margin: 20px 0;
            transition: transform 0.4s ease;
          }

          .portfolio-image:hover {
            transform: scale(1.05);
          }

          .portfolio-description {
            font-size: 16px;
            color: #555;
            margin-bottom: 20px;
            line-height: 1.6;
          }

          .portfolio-features, .portfolio-providers {
            font-size: 16px;
            color: #333;
            list-style: none;
            padding: 0;
            line-height: 1.8;
          }

          .portfolio-features li, .portfolio-providers li {
            margin: 8px 0;
          }

          .portfolio-features li::before {
            content: "• ";
            color: #d4a5ff;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 768px) {
            .portfolio-service {
              padding: 15px;
            }
            .portfolio-title {
              font-size: 24px;
            }
            .portfolio-description {
              font-size: 14px;
            }
          }

          @media (max-width: 480px) {
            .portfolio-title {
              font-size: 20px;
            }
            .portfolio-description {
              font-size: 13px;
            }
          }

        `}
      </style>

      <div className="service-container">
        <div className="container-service">
          <h2 className="title">Voices of Satisfaction and Success</h2>
          <p className="subtitle">
            We take pride in building lasting partnerships and delivering
            solutions that exceed expectations.
          </p>
          <div className="testimonial">
            <div className="arrow left" onClick={() => changeTestimonial(-1)}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <img
              src={testimonial.img}
              alt="Portrait of a smiling person"
              className="testimonial-img"
            />
            <div className="testimonial-content">
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="name">{testimonial.name}</div>
              <div className="position">{testimonial.position}</div>
              <div className="stars">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} className="star" />
                ))}
              </div>
            </div>
            <div className="arrow right" onClick={() => changeTestimonial(1)}>
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </div>
        </div>

        <div className="portfolio-service">
          <h2 className="portfolio-title">What is a Portfolio Service?</h2>
          <img
            src={"../public/_image/port.jpg"}
            alt="Example of a Portfolio Layout"
            className="portfolio-image"
          />
          <p className="portfolio-description">
            A portfolio service is a platform that allows individuals to
            showcase their work, skills, and experiences in a professional and
            organized manner. It is frequently used by creative professionals to
            attract clients or employers.
          </p>

          <h3>Key Features of a Portfolio Service:</h3>
          <ul className="portfolio-features">
            <li>
              <strong>Project Showcase:</strong> Display a variety of projects,
              with options to categorize and add detailed descriptions.
            </li>
            <li>
              <strong>Customization:</strong> Customizable templates, layouts,
              and advanced styling options.
            </li>
            <li>
              <strong>SEO & Social Media Integration:</strong> Improve
              visibility and shareability with SEO-friendly URLs and social
              links.
            </li>
            <li>
              <strong>Online Hosting:</strong> Secure hosting and CMS options
              for easy management.
            </li>
            <li>
              <strong>Client Management:</strong> Includes contact forms, client
              portals, and payment processing.
            </li>
          </ul>

          <h3>Popular Portfolio Service Providers:</h3>
          <ul className="portfolio-providers">
            <li>Adobe Portfolio</li>
            <li>Squarespace</li>
            <li>Wix</li>
            <li>Cargo Collective</li>
            <li>Behance</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Service;
