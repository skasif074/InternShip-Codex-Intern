import React from 'react';
import { Code, Users, BookOpen, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Code className="h-12 w-12 text-cn-orange" />,
      title: "Interactive Learning",
      description: "Learn with interactive code editors and real-time feedback"
    },
    {
      icon: <Users className="h-12 w-12 text-cn-orange" />,
      title: "Mentor Support",
      description: "Get guidance from industry experts and experienced mentors"
    },
    {
      icon: <BookOpen className="h-12 w-12 text-cn-orange" />,
      title: "Structured Curriculum",
      description: "Follow a well-designed curriculum that builds your skills progressively"
    },
    {
      icon: <Award className="h-12 w-12 text-cn-orange" />,
      title: "Career Opportunities",
      description: "Get placement assistance and connect with top companies"
    }
  ];

  return (
    <section className="py-16 bg-cn-light-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cn-blue mb-4">Why Choose Coding Ninjas?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide the best learning experience to help you achieve your coding goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-cn-blue mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;