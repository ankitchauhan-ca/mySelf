import React from 'react';
import './CuratedCollection.css'; 

const CuratedCollection = () => {
    return (
        <div className="container-collection">
            <div className="text-center mb-12">
                <p className="text-sm text-gray-600">MY PORTFOLIO • SHOWCASING MY WORK</p>
                <h1 className="text-3xl font-bold text-gray-800 mt-2">Explore a selection of my projects and achievements</h1>
                <p className="text-gray-600 mt-4">From web applications to mobile solutions, take a look at the diverse projects I've had the pleasure to work on.</p>
            </div>
            <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden card">
                    <img src="../public/_image/E-commerce Platform.jpg" alt="Project thumbnail" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h2 className="text-xl font-semibold text-gray-800">Responsive E-commerce Platform</h2>
                        <p className="text-gray-600 mt-2">A full-featured e-commerce website built with React, Node.js, and MongoDB.</p>
                        <a href="#" className="text-orange-500 mt-4 inline-block">See Project <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden card">
                    <img src="../public/_image/Task-Management.png" alt="Project thumbnail" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h2 className="text-xl font-semibold text-gray-800">Mobile Task Management App</h2>
                        <p className="text-gray-600 mt-2">An efficient task management app developed with React Native Expo.</p>
                        <a href="#" className="text-orange-500 mt-4 inline-block">See Project <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden card">
                    <img src="../public/_image/Real-Time-Collaboration-Tool.png" alt="Project thumbnail" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h2 className="text-xl font-semibold text-gray-800">Real-Time Collaboration Tool</h2>
                        <p className="text-gray-600 mt-2">A collaborative platform with real-time updates built using Socket.io and MongoDB.</p>
                        <a href="#" className="text-orange-500 mt-4 inline-block">See Project <i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="bg-img rounded-lg shadow-md overflow-hidden text-center py-12 card">
                    <a href="#" className="text-white text-lg font-semibold">VIEW ALL PROJECTS <i className="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
};

export default CuratedCollection;
