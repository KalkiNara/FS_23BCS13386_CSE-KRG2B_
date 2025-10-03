import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          About This Application
        </h1>
        <p className="text-xl text-gray-600">
          A simple demonstration of React Router fundamentals
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Project Overview</h2>
          <p className="text-gray-600 mb-6">
            This React application demonstrates the core concepts of client-side routing 
            using React Router DOM. It shows how to create a single-page application 
            with multiple views that can be navigated without full page reloads.
          </p>
          <p className="text-gray-600">
            The application features a clean, modern design built with Tailwind CSS, 
            providing a responsive user experience across different device sizes.
          </p>
        </div>

        <div className="bg-blue-50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-blue-800 mb-6">Technologies Used</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-blue-700 font-medium">React 18.2.0</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-blue-700 font-medium">React Router DOM 6.8.1</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-blue-700 font-medium">Tailwind CSS 3.3.0</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-blue-700 font-medium">Create React App</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start space-x-3">
              <span className="text-green-500 mt-1">✓</span>
              <span>Client-side routing with React Router</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500 mt-1">✓</span>
              <span>Multiple page components</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500 mt-1">✓</span>
              <span>Navigation with active link highlighting</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500 mt-1">✓</span>
              <span>Responsive design with Tailwind CSS</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Learning Objectives</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 mt-1">•</span>
              <span>Understanding React Router setup</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 mt-1">•</span>
              <span>Creating route components</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 mt-1">•</span>
              <span>Implementing navigation links</span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 mt-1">•</span>
              <span>Styling with utility-first CSS</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;