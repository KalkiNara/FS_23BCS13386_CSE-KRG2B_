import React from 'react';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Welcome to React Router Demo
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          This is a simple demonstration of React Router with Tailwind CSS.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-blue-600 text-3xl mb-4">🏠</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Home Page</h3>
          <p className="text-gray-600">
            You're currently on the home page. This demonstrates the default route.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-green-600 text-3xl mb-4">ℹ️</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">About Page</h3>
          <p className="text-gray-600">
            Learn more about this application and the technologies used.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-purple-600 text-3xl mb-4">📞</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Contact Page</h3>
          <p className="text-gray-600">
            Get in touch with us through our contact information.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <div className="bg-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Getting Started</h3>
          <p className="text-gray-600 mb-6">
            Use the navigation menu above to explore different pages and see React Router in action.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;