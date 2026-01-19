
import React from 'react';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="bg-gray-50 pb-20">
      <section className="bg-brand py-20 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Pet Health Blog</h1>
        <p className="text-xl text-brand-light">Expert advice for a happy, healthy pet.</p>
      </section>

      <div className="container mx-auto px-4 mt-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-md group hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="h-72 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-8 flex-grow">
                <span className="text-brand font-bold text-sm uppercase tracking-widest">{post.date}</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4 group-hover:text-brand transition">{post.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">{post.excerpt}</p>
                <button className="text-brand font-bold flex items-center group-hover:translate-x-2 transition">
                  Read Article
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
