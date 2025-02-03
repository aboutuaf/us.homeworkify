import React from 'react';
import { Search, BookOpen, Clock, Award } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl mb-8">
              The evolution of 24/7 study starts here
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Quick step-by-step solutions. When you need them.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="What would you like help with today?"
                  className="w-full px-6 py-4 text-lg border-2 border-indigo-100 rounded-lg focus:outline-none focus:border-indigo-500 pr-16"
                />
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-lg">
                  <Search className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <BookOpen className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Solutions</h3>
              <p className="text-gray-600">Get step-by-step explanations from verified experts</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Clock className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Access</h3>
              <p className="text-gray-600">Get help anytime, anywhere with our round-the-clock service</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Better Grades</h3>
              <p className="text-gray-600">91% of students report improved grades with our help</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Questions Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Recently Asked Questions</h2>
          <div className="grid gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      What is the difference between mitosis and meiosis?
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Biology • Cell Division
                    </p>
                  </div>
                  <span className="text-indigo-600 text-sm font-medium">5 answers</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Asked 2 hours ago</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;