import React from 'react';

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:text-center mb-12">
        <h2 className="text-base text-yellow-500 font-semibold tracking-wide uppercase">Our Services</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Comprehensive Building Solutions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900">Delivery Services</h3>
          <p className="mt-2 text-gray-600">Fast and reliable delivery to your construction site.</p>
        </div>
      </div>
    </div>
  );
}