import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';

const testimonials = [
  {
    img: "https://placehold.co/100x100",
    text: "They are a creative force to reckon with. Their innovative ideas and exceptional design sense set them apart in the industry.",
    name: "Michael Lee",
    position: "Customer Experience Lead",
    stars: 5
  },
  {
    img: "https://placehold.co/100x100",
    text: "Their attention to detail and commitment to excellence is unparalleled. They truly understand the needs of their clients.",
    name: "Sarah Johnson",
    position: "Project Manager",
    stars: 5
  },
  {
    img: "https://placehold.co/100x100",
    text: "A team of professionals who are dedicated to delivering top-notch solutions. Their expertise is evident in every project.",
    name: "David Smith",
    position: "Technical Lead",
    stars: 5
  }
];

function Service() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const changeTestimonial = (direction) => {
    setCurrentTestimonial((currentTestimonial + direction + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[currentTestimonial];

  return (
    <div>
      <style>
        {`
          body {
            font-family: 'Arial', sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: auto; 
            overflow: scroll;
          }

          .container-service {
            text-align: center;
            max-width: 800px;
            margin: 0 20px;
            width: 100%;
            padding: 20px;
            margin-top: 100px;
            box-sizing: border-box;
          }
          .title {
            font-size: 36px;
            font-weight: bold;
            color: #333;
          }

          .subtitle {
            font-size: 16px;
            color: #777;
            margin-top: 10px;
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
            flex-wrap: wrap;
            max-width: 600px;
            margin: 0 auto; 
          }

          .testimonial img {
            border-radius: 10px;
            width: 100px;
            height: 100px;
            object-fit: cover;
          }

          .testimonial-content {
            margin-left: 20px;
            text-align: left;
            flex: 1;
          }

          .testimonial-content p {
            font-size: 16px;
            color: #333;
            margin: 0;
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

          .arrow {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background-color: transparent;
            border: 1px solid #bdbcbc;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
          }

          .arrow.left {
            left: -50px;
          }

          .arrow.right {
            right: -50px;
          }

          @media (max-width: 768px) {
            .testimonial {
              flex-direction: column;
              text-align: center;
            }
            .testimonial-content {
              margin-left: 0; 
              margin-top: 20px; 
            }
            .arrow.left, .arrow.right {
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
            .testimonial img {
              width: 80px; 
              height: 80px;  
            }
            .testimonial-content p {
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
        `}
      </style>

      <div className="container-service">
        <div className="title">Voices of Satisfaction and Success</div>
        <div className="subtitle">We take pride in building lasting partnerships and delivering solutions that exceed expectations.</div>
        <div className="testimonial">
          <div className="arrow left" onClick={() => changeTestimonial(-1)}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <img src={testimonial.img} alt="Portrait of a smiling person" />
          <div className="testimonial-content">
            <p>{testimonial.text}</p>
            <div className="name">{testimonial.name}</div>
            <div className="position">{testimonial.position}</div>
            <div className="stars">
              {[...Array(testimonial.stars)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} />
              ))}
            </div>
          </div>
          <div className="arrow right" onClick={() => changeTestimonial(1)}>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
