import React from 'react';
import './CuratedCollection.css'; // Import the CSS file

const CuratedCollection = () => {
    return (
        <div className="container-collection">
            <div className="text-center mb-12">
                <p className="text-sm text-gray-600">VTURES • DESIGNED FOR YOUR EVE</p>
                <h1 className="text-3xl font-bold text-gray-800 mt-2">Explore our curated collection of high-quality products</h1>
                <p className="text-gray-600 mt-4">Whether you're looking for a stylish new bag, a captivating book, or a perfect mug for your morning brew, we've got you covered.</p>
            </div>
            <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden card">
                    <img src="https://placehold.co/600x200" alt="Three premium kits with orange interiors" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h2 className="text-xl font-semibold text-gray-800">Lightweight, durable, and perfect for any journey with our premium kits</h2>
                        <a href="#" className="text-orange-500 mt-4 inline-block">See Details <i className="fas fa-arrow-right"></i></a>
                    </div>
                    <div className="hover-content">Premium kits are designed for durability and style.</div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden card">
                    <img src="https://placehold.co/600x200" alt="Close-up of a stylish bag" className="w-full h-48 object-cover" />
                    <div className="hover-content">This stylish bag is perfect for any occasion.</div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden card">
                    <img src="https://placehold.co/600x200" alt="A notebook with an orange elastic band" className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h2 className="text-xl font-semibold text-gray-800">Tools to stay organized and on top of your goals every day.</h2>
                        <div className="flex items-center mt-4">
                            <p className="text-gray-600">Plan Ahead <i className="fas fa-arrow-right"></i></p>
                            <span className="ml-4 text-gray-800 font-semibold">spacekit</span>
                        </div>
                    </div>
                    <div className="hover-content">Stay organized with our premium notebooks.</div>
                </div>
                <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden text-center py-12 card">
                    <a href="#" className="text-white text-lg font-semibold">LEARN MORE <i className="fas fa-arrow-right"></i></a>
                    <div className="hover-content">Learn more about our curated collection.</div>
                </div>
            </div>
        </div>
    );
};

export default CuratedCollection;
