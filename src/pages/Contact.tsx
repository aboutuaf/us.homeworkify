import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="flex-grow bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <form>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Your message here..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-gray-600">support@homeworkify.com</p>
                  <p className="text-gray-600">business@homeworkify.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p className="text-gray-600">1-800-HOMEWORK</p>
                  <p className="text-gray-600">Mon-Fri 9am-6pm EST</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-indigo-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Office</h3>
                  <p className="text-gray-600">123 Education Street</p>
                  <p className="text-gray-600">New York, NY 10001</p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">How fast can I get help?</h3>
                  <p className="text-gray-600">Our tutors typically respond within 15-30 minutes, 24/7.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">How do payments work?</h3>
                  <p className="text-gray-600">We use secure payment processing and offer various payment methods.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;