import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faCode, faCompass } from '@fortawesome/free-solid-svg-icons';

const styles = {
  body: {
    fontFamily: 'Inter, sans-serif',
    margin: 0,
    padding: 0,
    backgroundColor: '#f5f7fa',
    color: '#333',
  },
  container: {
    width: '80%',
    margin: '0 auto',
    textAlign: 'center',
  },
  header: {
    padding: '50px 0',
  },
  headerTitle: {
    fontSize: '2.5em',
    margin: 0,
  },
  headerSubtitle: {
    fontSize: '1.2em',
    color: '#666',
  },
  buttons: {
    marginTop: '20px',
  },
  button: {
    textDecoration: 'none',
    color: '#007bff',
    margin: '0 10px',
  },
  mainImage: {
    margin: '30px 0',
  },
  mainImageImg: {
    width: '100%',
    maxWidth: '800px',
  },
  features: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    margin: '50px 0',
  },
  feature: {
    width: '30%',
    textAlign: 'left',
    marginBottom: '20px',
  },
  featureImg: {
    width: '100%',
    height: 'auto',
  },
  featureTitle: {
    fontSize: '1.5em',
    margin: '10px 0',
  },
  featureDescription: {
    color: '#666',
  },
  platform: {
    margin: '50px 0',
  },
  platformText: {
    fontSize: '1.2em',
    color: '#666',
  },
  services: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    margin: '50px 0',
  },
  service: {
    width: '22%',
    textAlign: 'center',
    marginBottom: '20px',
  },
  serviceIcon: {
    fontSize: '2em',
    color: '#007bff',
  },
  serviceTitle: {
    fontSize: '1.2em',
    margin: '10px 0',
  },
  testimonial: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: '50px 0',
  },
  testimonialImg: {
    width: '45%',
    height: 'auto',
    marginBottom: '20px',
  },
  quote: {
    width: '45%',
    textAlign: 'left',
  },
  quoteText: {
    fontSize: '1.2em',
    color: '#666',
  },
  quoteAuthor: {
    fontSize: '1em',
    margin: '10px 0',
  },
  insights: {
    margin: '50px 0',
  },
  insightsTitle: {
    fontSize: '2em',
    margin: '20px 0',
  },
  articles: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  article: {
    width: '30%',
    textAlign: 'left',
    marginBottom: '20px',
  },
  articleImg: {
    width: '100%',
    height: 'auto',
  },
  articleTitle: {
    fontSize: '1.2em',
    margin: '10px 0',
  },
  articleDescription: {
    color: '#666',
  },
};

function About() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.headerTitle}>Built for growth, designed for you</h1>
        <p style={styles.headerSubtitle}>Welcome to Smart</p>
        <div style={styles.buttons}>
          <a href="#" style={styles.button}>Learn More</a>
          <a href="#" style={styles.button}>Request a Demo</a>
        </div>
      </div>
      <div style={styles.mainImage}>
        <img
          src="https://storage.googleapis.com/a1aa/image/OijJLPKl3ZJkINs5FjVbmqvLelgbQpq2O1YRfsJI7AZbUSqTA.jpg"
          alt="Person with colorful background and glasses"
          style={styles.mainImageImg}
        />
      </div>
      <div style={styles.features}>
        {[
          {
            imgSrc: "https://storage.googleapis.com/a1aa/image/gOAOf9rkn33SSi4IeHC9CX4MUX8k4LeZbgEfe8wrfKhlHlk6E.jpg",
            title: "Predictive Analytics Insights",
            description: "Make data-driven decisions with ease."
          },
          {
            imgSrc: "https://storage.googleapis.com/a1aa/image/TWsvfzhPtl1mGaEHxU3YAVeK8tkEcUS8sLK4F2Ju8gHaUSqTA.jpg",
            title: "Automated Workflow Enabled",
            description: "Save time with modern tools and efficient workflows."
          },
          {
            imgSrc: "https://storage.googleapis.com/a1aa/image/EwW1vhga7bpaHJEqL01m7Gz2Rz6dKp1ygzUu5kLbNLePKJ1JA.jpg",
            title: "Enterprise-Grade Data Security",
            description: "Keep your data safe with top-tier security."
          }
        ].map((feature, index) => (
          <div key={index} style={styles.feature}>
            <img src={feature.imgSrc} alt={feature.title} style={styles.featureImg} />
            <h3 style={styles.featureTitle}>{feature.title}</h3>
            <p style={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>
      <div style={styles.platform}>
        <p style={styles.platformText}>
          Our platform is designed for modern businesses looking to optimize and innovate. Experience flexibility and
          reliability in one place.
        </p>
      </div>
      <div style={styles.services}>
        {[
          {
            icon: faChartLine,
            title: "Refractional",
            description: "Get a clear view of your data with our analytics tools."
          },
          {
            icon: faCode,
            title: "Codecraft",
            description: "Streamline your coding process with our efficient tools."
          },
          {
            icon: faCompass,
            title: "7.45 Degrees",
            description: "Bring accuracy to your projects with our precision tools."
          }
        ].map((service, index) => (
          <div key={index} style={styles.service}>
            <FontAwesomeIcon icon={service.icon} style={styles.serviceIcon} />
            <h4 style={styles.serviceTitle}>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <div style={styles.testimonial}>
        <img
          src="https://storage.googleapis.com/a1aa/image/UglmD4DQBF7lChi4m3lTbnRlKDMzPw46zdT65Z4Ug7MJlk6E.jpg"
          alt="Phone with app open"
          style={styles.testimonialImg}
        />
        <div style={styles.quote}>
          <p style={styles.quoteText}>“Our team’s productivity has skyrocketed thanks to the intuitive design and powerful features.”</p>
          <h4 style={styles.quoteAuthor}>
            Jane Bower
            <br />
            Lead Software Engineer
          </h4>
        </div>
      </div>
      <div style={styles.insights}>
        <h2 style={styles.insightsTitle}>Insights to drive your business forward</h2>
        <div style={styles.articles}>
          {[
            {
              imgSrc: "https://storage.googleapis.com/a1aa/image/Zyo1k2UCl86yI9D29OmZ8zDtnTziQFVENPRDXszIe02QKJ1JA.jpg",
              title: "Unlocking Earnings with Webflow: A Guide to Profitable Web Design Projects",
              description: "Learn how to maximize your earnings with Webflow."
            },
            {
              imgSrc: "https://storage.googleapis.com/a1aa/image/rLxhwwJSCeXiL6y7LRwtyOOOIIFfqSrTdIwYg5bojhWcUSqTA.jpg",
              title: "Boosting Your Bottom Line: The Business of Buying and Selling Webflow Templates",
              description: "Discover the business potential of Webflow templates."
            },
            {
              imgSrc: "https://storage.googleapis.com/a1aa/image/Nb82sfaGJRWPEqKLRMoeLeEvIK8wuc8pOWNgeEfBe6bx5L8EA.jpg",
              title: "The Future of No-Code Development: A Closer Look at Webflow",
              description: "Explore the future of no-code development with Webflow."
            }
          ].map((article, index) => (
            <div key={index} style={styles.article}>
              <img src={article.imgSrc} alt={article.title} style={styles.articleImg} />
              <h3 style={styles.articleTitle}>{article.title}</h3>
              <p style={styles.articleDescription}>{article.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
