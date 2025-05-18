
import React from "react";
import { Button } from "./ui/button";

const AboutSection = () => {
  return (
    <section className="section-padding bg-white" id="about">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <span className="text-sm text-primary font-medium">ABOUT US</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2">The Premier Mountain Biking School in the French Alps</h2>
            </div>
            <p className="text-gray mb-6">
              Founded in 2005, Alpe d'Huez Biking School has been providing world-class mountain biking instruction and unforgettable alpine experiences for riders of all levels. Our team of certified instructors is passionate about the sport and committed to helping you improve your skills while enjoying the breathtaking landscape of the Alps.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-secondary p-2 rounded-md mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#279DCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Certified Instructors</h3>
                  <p className="text-gray text-sm">All our instructors are professionally certified and experienced.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary p-2 rounded-md mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#279DCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Custom Programs</h3>
                  <p className="text-gray text-sm">Tailored courses to suit your skill level and goals.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary p-2 rounded-md mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#279DCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Quality Equipment</h3>
                  <p className="text-gray text-sm">We provide high-quality bikes and safety gear for all courses.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary p-2 rounded-md mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#279DCC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Award-Winning</h3>
                  <p className="text-gray text-sm">Recognized as the top biking school in the French Alps.</p>
                </div>
              </div>
            </div>
            
            <Button className="btn btn-primary">Learn More About Us</Button>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1605284322931-231c456f9dde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" 
              alt="Mountain Biking Instructor" 
              className="rounded-lg w-full h-auto object-cover shadow-xl"
            />
            <div className="absolute -bottom-10 -left-10 bg-white p-4 rounded-lg shadow-lg hidden md:block">
              <div className="flex items-center space-x-2">
                <div className="bg-primary h-12 w-12 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  18
                </div>
                <div>
                  <p className="text-sm text-gray">Years of</p>
                  <p className="font-bold">Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
