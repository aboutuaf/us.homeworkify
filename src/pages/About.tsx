import React from 'react';
import { Users, Award, Clock, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="flex-grow bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl mb-8">
              About Homeworkify
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to make quality education accessible to everyone. Our platform connects students with expert tutors and provides opportunities to earn while learning.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">500K+</div>
              <div className="text-gray-600">Students Helped</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">50K+</div>
              <div className="text-gray-600">Expert Tutors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">1M+</div>
              <div className="text-gray-600">Questions Answered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Users className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Tutors</h3>
              <p className="text-gray-600">Access a network of verified experts ready to help with your homework.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Award className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Solutions</h3>
              <p className="text-gray-600">Get detailed, step-by-step explanations for better understanding.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Clock className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Get help anytime, anywhere with our round-the-clock service.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Shield className="h-12 w-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
              <p className="text-gray-600">Your data and transactions are protected with enterprise-grade security.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;