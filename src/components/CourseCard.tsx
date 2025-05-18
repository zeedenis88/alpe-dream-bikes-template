
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

export interface CourseProps {
  id: string;
  title: string;
  level: string;
  duration: string;
  price: string;
  image: string;
  features: string[];
  slug: string;
}

const CourseCard: React.FC<CourseProps> = ({ 
  id, 
  title, 
  level, 
  duration, 
  price, 
  image, 
  features,
  slug
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 left-4 bg-primary text-white text-sm py-1 px-3 rounded-full">
          {level}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        
        <div className="flex items-center text-gray mb-4">
          <div className="flex items-center mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <span>{price}</span>
          </div>
        </div>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray">{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="flex items-center justify-between">
          <Link to={`/course/${slug}`}>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              View Details
            </Button>
          </Link>
          <Button className="btn btn-primary">Book Now</Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
