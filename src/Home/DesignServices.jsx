// src/DesignServices.jsx

import { faBlackboard } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

const DesignServices = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const styles = {
    container: {
      width: '80%',
      margin: '0 auto',
      padding: '20px 0',
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
    },
    headerTitle: {
      fontSize: '36px',
      fontWeight: 700,
      margin: 0,
    },
    headerText: {
      fontSize: '16px',
      color: '#888',
    },
    headerLink: {
      display: 'inline-block',
      marginTop: '10px',
      padding: '10px 20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      textDecoration: 'none',
      color: '#333',
      fontSize: '14px',
    },
    services: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    service: {
      width: '48%',
      marginBottom: '40px',
      backgroundColor: 'transparent',
      borderRadius: '10px',
      overflow: 'hidden',
      position: 'relative', // For the line wrapper
    },
    serviceImage: {
      width: '100%',
      height: 'auto',
      transition: 'transform 0.3s ease', // Smooth transition for image
    },
    serviceImageHovered: {
      transform: 'scale(0.95)', // Shrink effect on hover
    },
    serviceContent: {
      padding: '20px',
    },
    serviceTitle: {
      fontSize: '20px',
      fontWeight: 700,
      margin: '0 0 10px',
      color: '#333',
    },
    serviceDescription: {
      fontSize: '14px',
      color: '#888',
      margin: '0 0 10px',
    },
    serviceLink: {
      display: 'inline-block',
      textDecoration: 'none',
      color: '#333',
      fontSize: '14px',
    },
    serviceLinkIcon: {
      marginLeft: '5px',
    },
    lineWrapper: {
      height: '2px',
      backgroundColor: '#333',
      width: '100%',
      marginTop: '10px',
      opacity: 0, // Initially hidden
      transition: 'opacity 0.3s ease', // Smooth transition for line visibility
    },
    lineWrapperVisible: {
      opacity: 1, // Show line on hover
    },
  };

  const servicesData = [
    {
      title: 'Brand Identity Design',
      description:
        'Cras pharetra vel blandit lacus. Arou lobortis diam malesuada lobortis tempus id. Est scelerisque aliquam habitasse faucibus magna nullam est eget.',
      image: 'https://storage.googleapis.com/a1aa/image/X0YwhHfXL8X9WqrsEyya7OzUk8rYNfCflSoWGTXV6aYsTmUnA.jpg',
    },
    {
      title: 'Custom Website Design',
      description:
        'Cras pharetra vel blandit lacus. Arou lobortis diam malesuada lobortis tempus id. Est scelerisque aliquam habitasse faucibus magna nullam est eget.',
      image: 'https://storage.googleapis.com/a1aa/image/C3aeRQQGR5TCMCE8YOZid074z9ai5HYfk6W6mNicj2kzJTqTA.jpg',
    },
    {
      title: 'Creative Concept Development',
      description:
        'Cras pharetra vel blandit lacus. Arou lobortis diam malesuada lobortis tempus id. Est scelerisque aliquam habitasse faucibus magna nullam est eget.',
      image: 'https://storage.googleapis.com/a1aa/image/r75YYpduQaqQCtEZelUD7kBmqXf9YqmBxTMeNJuK179qTmUnA.jpg',
    },
    {
      title: 'Visual Storytelling Solutions',
      description:
        'Cras pharetra vel blandit lacus. Arou lobortis diam malesuada lobortis tempus id. Est scelerisque aliquam habitasse faucibus magna nullam est eget.',
      image: 'https://storage.googleapis.com/a1aa/image/auiNQBh4B14VPF9ci1tZhFt812YQUhjBOu50P6FzfsN8kJ1JA.jpg',
    },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <p style={styles.headerText}>— Our services</p>
        <h1 style={styles.headerTitle}>Delivering professional creative services for every design need.</h1>
        <a style={styles.headerLink} href="#">
          View more service
        </a>
      </div>
      <div style={styles.services}>
        {servicesData.map((service, index) => (
          <div
            style={styles.service}
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              alt={service.title}
              style={{
                ...styles.serviceImage,
                ...(hoveredIndex === index ? styles.serviceImageHovered : {}),
              }}
              src={service.image}
            />
            <div style={styles.serviceContent}>
              <h3 style={styles.serviceTitle}>{service.title}</h3>
              <p style={styles.serviceDescription}>{service.description}</p>
              <a style={styles.serviceLink} href="#">
                Read more <i className="fas fa-arrow-right" style={styles.serviceLinkIcon}></i>
              </a>
            </div>
            <div
              style={{
                ...styles.lineWrapper,
                ...(hoveredIndex === index ? styles.lineWrapperVisible : {}),
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignServices;
