import React from 'react';
import { Play, Award, Users, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-cn-light-blue py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left content */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-cn-blue mb-4">
              Master Coding Skills with India's Best Programming Courses
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Interactive learning platform with online courses, coding problems, practice tracks, and mock tests.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-cn-orange text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition flex items-center justify-center">
                <Play className="h-5 w-5 mr-2" fill="white" />
                Explore Courses
              </button>
              <button className="border border-cn-blue text-cn-blue px-6 py-3 rounded-md font-medium hover:bg-cn-blue hover:text-white transition">
                Try for Free
              </button>
            </div>
          </div>

          {/* Right content - Stats */}
          <div className="md:w-1/2 md:pl-12">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Award className="h-10 w-10 text-cn-orange mb-3" />
                <h3 className="text-2xl font-bold text-cn-blue">200K+</h3>
                <p className="text-gray-600">Students Placed</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Users className="h-10 w-10 text-cn-orange mb-3" />
                <h3 className="text-2xl font-bold text-cn-blue">1.5M+</h3>
                <p className="text-gray-600">Happy Students</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <BookOpen className="h-10 w-10 text-cn-orange mb-3" />
                <h3 className="text-2xl font-bold text-cn-blue">50+</h3>
                <p className="text-gray-600">Courses</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Award className="h-10 w-10 text-cn-orange mb-3" />
                <h3 className="text-2xl font-bold text-cn-blue">1000+</h3>
                <p className="text-gray-600">Hiring Partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;