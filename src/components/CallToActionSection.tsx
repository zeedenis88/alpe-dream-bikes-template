
import React from "react";
import { Button } from "./ui/button";

const CallToActionSection = () => {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1571993003551-8aeae7000335?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" 
          alt="Mountain biking trail" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>
      
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Experience the Thrill of Mountain Biking?</h2>
          <p className="text-xl mb-8">
            Join us at Alpe d'Huez and discover the joy of riding through some of the most beautiful mountain trails in France.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-primary hover:bg-gray-100">Book a Course Now</Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
