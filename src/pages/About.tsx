import React from 'react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:text-center mb-12">
        <h2 className="text-base text-yellow-500 font-semibold tracking-wide uppercase">About Us</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Your Trusted Building Materials Partner
        </p>
      </div>
      
      <div className="prose prose-lg mx-auto">
        <p className="text-gray-600 mb-6">
          Builders Avenue is your premier destination for quality building materials in Winneba, Ghana. 
          Located at Pomadze, Off Winneba-Swedru Road, we serve contractors, developers, and homeowners 
          with a comprehensive range of construction supplies.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 my-12">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To provide high-quality building materials and exceptional service that empowers our 
              customers to build with confidence and success.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the most trusted and preferred building materials supplier in the Central Region, 
              known for quality, reliability, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}