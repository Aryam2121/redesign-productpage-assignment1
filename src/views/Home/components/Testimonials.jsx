import React from 'react';

const Testimonials = () => {
  return (
    <div className="max-w-screen-xl mx-auto text-center">
      <h2 className="text-2xl font-semibold text-gray-900">What Our Users Say</h2>
      <div className="mt-6 flex flex-wrap justify-center space-x-6">
        {/* Sample Testimonial 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md w-64">
          <p className="text-sm text-gray-500">"This product has transformed how we work. Highly recommended!"</p>
          <h3 className="mt-4 text-lg font-medium text-gray-900">Jane Doe</h3>
          <p className="text-sm text-gray-500">CEO, Company Name</p>
        </div>
        {/* Sample Testimonial 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md w-64">
          <p className="text-sm text-gray-500">"An amazing solution. The ease of use is incredible!"</p>
          <h3 className="mt-4 text-lg font-medium text-gray-900">John Smith</h3>
          <p className="text-sm text-gray-500">Product Manager, Another Company</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
