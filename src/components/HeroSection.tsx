
import React from "react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center flex items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576585242188-daef159c2cc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')" }}>
      <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-dark/30"></div>
      <div className="container-custom relative z-10 pt-20">
        <div className="max-w-xl">
          <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-medium mb-4">WELCOME TO ALPE D'HUEZ</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Experience The Mountain <span className="text-primary">Biking Adventure</span>
          </h1>
          <p className="text-gray-200 text-lg mb-8">
            Professional mountain bike instruction in the beautiful Alps. Courses for all levels from beginners to advanced riders.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="btn btn-primary">Explore Courses</Button>
            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-dark">
              Watch Video
            </Button>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-dark/80 backdrop-blur p-4 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-1">15+</div>
              <div className="text-white text-sm">Experienced Instructors</div>
            </div>
            <div className="bg-dark/80 backdrop-blur p-4 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-1">30+</div>
              <div className="text-white text-sm">Bike Trails</div>
            </div>
            <div className="bg-dark/80 backdrop-blur p-4 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-1">2500+</div>
              <div className="text-white text-sm">Happy Students</div>
            </div>
            <div className="bg-dark/80 backdrop-blur p-4 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-1">100+</div>
              <div className="text-white text-sm">Equipment Options</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
