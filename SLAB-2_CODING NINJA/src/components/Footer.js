import React from 'react';
import { BookOpen, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-cn-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <BookOpen className="h-8 w-8 text-white" />
              <span className="ml-2 text-2xl font-bold">Coding Ninjas</span>
            </div>
            <p className="text-gray-300 mb-4">
              India's best platform for learning coding and cracking interviews.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer" />
              <Twitter className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer" />
              <Instagram className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer" />
              <Linkedin className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer" />
              <Youtube className="h-6 w-6 text-gray-300 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-bold mb-4">Courses</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Data Structures & Algorithms</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Web Development</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Competitive Programming</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Machine Learning</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Android Development</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Events</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Practice Coding</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Placement Cell</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Scholarships</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">support@codingninjas.com</li>
              <li className="text-gray-300">+91 1234567890</li>
              <li className="text-gray-300">Bangalore, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>© {new Date().getFullYear()} Coding Ninjas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;