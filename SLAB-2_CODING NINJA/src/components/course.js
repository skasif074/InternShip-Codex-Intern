import React from 'react';
import { Star, Clock, User, Award } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Data Structures & Algorithms",
      description: "Master data structures and algorithms in C++/Java/Python",
      rating: 4.9,
      students: 50000,
      duration: "6 months",
      level: "Beginner to Advanced",
      image: "https://via.placeholder.com/300x200?text=DSA",
      price: "₹12,000"
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      description: "Learn frontend and backend development with MERN stack",
      rating: 4.8,
      students: 35000,
      duration: "8 months",
      level: "Intermediate",
      image: "https://via.placeholder.com/300x200?text=Web+Dev",
      price: "₹15,000"
    },
    {
      id: 3,
      title: "Competitive Programming",
      description: "Excel in coding interviews and competitions",
      rating: 4.95,
      students: 25000,
      duration: "4 months",
      level: "Advanced",
      image: "https://via.placeholder.com/300x200?text=CP",
      price: "₹10,000"
    }
  ];

  return (
    <section id="courses" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cn-blue mb-4">Our Popular Courses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from a wide range of courses designed by industry experts to kickstart your coding journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-cn-blue mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-gray-700">{course.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-5 w-5 text-gray-500" />
                    <span className="ml-1 text-gray-700">{course.students.toLocaleString()}+</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-500" />
                    <span className="ml-1 text-gray-700">{course.duration}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {course.level}
                  </span>
                  <span className="text-lg font-bold text-cn-orange">{course.price}</span>
                </div>
                
                <button className="w-full bg-cn-blue text-white py-2 rounded-md hover:bg-blue-800 transition">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-cn-orange text-cn-orange px-8 py-3 rounded-md font-medium hover:bg-cn-orange hover:text-white transition">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;