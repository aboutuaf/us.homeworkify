import React from 'react';
import { Calendar } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "How to Excel in Mathematics: Tips from Top Tutors",
      excerpt: "Discover proven strategies and techniques to improve your math skills and boost your confidence in solving complex problems.",
      date: "March 15, 2024",
      category: "Study Tips",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "The Science Behind Effective Study Methods",
      excerpt: "Learn about research-backed study techniques that can help you retain information better and improve your academic performance.",
      date: "March 12, 2024",
      category: "Research",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Making Money While Studying: A Student's Guide",
      excerpt: "Explore various opportunities to earn money online while maintaining your academic performance and managing your time effectively.",
      date: "March 10, 2024",
      category: "Earning",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div className="flex-grow bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Latest Blog Posts</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.category}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-indigo-600 font-medium hover:text-indigo-700">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
            Load More Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;