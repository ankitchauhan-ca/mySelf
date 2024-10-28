import React from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <div className="container-about">
      <style jsx>{`
        /* Base styles */
        body {
          font-family: "Roboto", sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f8f8f8;
          color: #333;
        }

        .container-about {
          width: 80%;
          margin: 0 auto;
          padding: 50px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .header-about {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        .header-text {
          max-width: 50%;
          flex: 1;
          min-width: 300px;
        }

        .header-text h1 {
          font-size: 48px;
          font-weight: 700;
          margin: 0;
        }

        .header-text p {
          font-size: 16px;
          margin: 20px 0;
        }

        .header-text .btn {
          display: inline-block;
          padding: 10px 20px;
          border: 1px solid #333;
          border-radius: 25px;
          text-decoration: none;
          color: #333;
          font-weight: 700;
          transition: all 0.3s ease;
        }

        .header-text .btn:hover {
          background-color: #ddd;
        }

        .header-image {
          max-width: 50%;
          flex: 1;
          min-width: 300px;
          overflow: hidden;
          border-radius: 10px; /* Maintain rounded corners even with hover animation */
        }

        .header-image img {
          width: 100%;
          transition: transform 0.3s ease; /* Animate hover effect */
        }

        .header-image:hover img {
          transform: scale(1.1); /* Zoom on hover */
        }

        .scroll-down {
          text-align: center;
          margin-top: 20px;
        }

        .scroll-down i {
          font-size: 24px;
          color: #333;
          animation: bounce 1s infinite alternate ease-in-out; /* Add bouncing animation */
        }

        @keyframes bounce {
          from,
          to {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .section {
          text-align: center;
          padding: 50px 0;
        }

        .section h2 {
          font-size: 36px;
          font-weight: 700;
          margin: 0 0 20px;
        }

        .section p {
          font-size: 16px;
          max-width: 600px;
          margin: 0 auto 20px;
        }

        .section .btn {
          display: inline-block;
          padding: 10px 20px;
          border: 1px solid #333;
          border-radius: 25px;
          text-decoration: none;
          color: #333;
          font-weight: 700;
          transition: all 0.3s ease;
        }

        .section .btn:hover {
          background-color: #ddd;
        }

        .section .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .section .section-header span {
          font-size: 14px;
          color: #999;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .header-text h1 {
            font-size: 36px;
          }
          .section h2 {
            font-size: 28px;
          }
        }

        @media (max-width: 480px) {
          .header-text h1 {
            font-size: 28px;
          }
          .section h2 {
            font-size: 24px;
          }
          .header-about {
            flex-direction: column;
            align-items: center;
          }
          .header-image {
            margin-top: 20px;
          }
        }
      `}</style>

      <div className="header-about">
        <motion.div
          className="header-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Designing Success, One Portfolio at a Time</h1>
          <p>
            Nisl non arcu et rhoncus lacus sit. Amet purus laoreet adipiscing eu
            leo odio vulputate turpis. Est scelerisque aliquam habitasse
            faucibus magna nullam est eget.
          </p>
          <a className="btn" href="#">
            Explore our portfolio
          </a>
        </motion.div>
        <motion.div
          className="header-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            alt="Portrait of a person looking to the side"
            src="../public/_image/made_boy.png"
          />
        </motion.div>
      </div>
      <motion.div
        className="scroll-down"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <i className="fas fa-chevron-down"></i>
      </motion.div>
      <motion.div
        className="section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="section-header">
          <span>— Your work</span>
          <span>Our passion —</span>
        </div>
        <h2>
          Crafting unique visual experiences that define creative identity.
        </h2>
        <p>
          At Portofy, we believe that every project tells a story. Our passion
          lies in turning visions into reality, blending creativity and strategy
          to portfolios that stand out. With years of experience across design,
          development, and brand building, we've helped countless individuals
          and businesses present their best work in a visually stunning and
          impactful way. Our team is committed to pushing boundaries, ensuring
          that your portfolio not only looks incredible but also reflects your
          personality and purpose.
        </p>
        <a className="btn" href="#">
          More about us
        </a>
      </motion.div>
    </div>
  );
};

export default Portfolio;
