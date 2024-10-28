import React from 'react';

const Portfolio = () => {
  return (
    <div className="container-about">
      <style>{`
        body {
            font-family: 'Roboto', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f8f8f8;
            color: #333;
        }
        .container-about { 
            width: 80%;
            margin: 0 auto;
            padding: 50px 0;
        }
        .header-about { 
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
        }
        .header-image {
            max-width: 50%;
            flex: 1;
            min-width: 300px;
        }
        .header-image img {
            width: 100%;
            border-radius: 10px;
        }
        .scroll-down {
            text-align: center;
            margin-top: 20px;
        }
        .scroll-down i {
            font-size: 24px;
            color: #333;
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
        }
      `}</style>
      
      <div className="header-about">
        <div className="header-text">
          <h1>Designing Success, One Portfolio at a Time</h1>
          <p>
            Nisl non arcu et rhoncus lacus sit. Amet purus laoreet adipiscing eu leo odio vulputate turpis. 
            Est scelerisque aliquam habitasse faucibus magna nullam est eget.
          </p>
          <a className="btn" href="#">Explore our portfolio</a>
        </div>
        <div className="header-image">
          <img
            alt="Portrait of a person looking to the side"
            src="https://placehold.co/400x600"
          />
        </div>
      </div>
      <div className="scroll-down">
        <i className="fas fa-chevron-down"></i>
      </div>
      <div className="section">
        <div className="section-header">
          <span>— Your work</span>
          <span>Our passion —</span>
        </div>
        <h2>Crafting unique visual experiences that define creative identity.</h2>
        <p>
          At Portofy, we believe that every project tells a story. Our passion lies in turning visions into 
          reality, blending creativity and strategy to portfolios that stand out. With years of experience 
          across design, development, and brand building, we've helped countless individuals and businesses 
          present their best work in a visually stunning and impactful way. Our team is committed to pushing 
          boundaries, ensuring that your portfolio not only looks incredible but also reflects your personality 
          and purpose.
        </p>
        <a className="btn" href="#">More about us</a>
      </div>
    </div>
  );
};

export default Portfolio;
