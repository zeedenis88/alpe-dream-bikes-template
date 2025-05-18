
import React from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Amateur Mountain Biker",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      quote: "The beginner course at Alpe d'Huez Biking School completely transformed my confidence on the trails. The instructors were patient, knowledgeable, and made learning fun!"
    },
    {
      id: 2,
      name: "Michael Roberts",
      role: "Weekend Warrior",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      quote: "I've taken courses at several biking schools, but none compare to the quality of instruction and the amazing trails at Alpe d'Huez. Worth every penny!"
    },
    {
      id: 3,
      name: "Emma Thompson",
      role: "Competitive Rider",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      quote: "The advanced techniques course helped me shave seconds off my race times. The video analysis and personalized feedback were invaluable to improving my skills."
    }
  ];

  return (
    <section className="section-padding bg-dark text-white">
      <div className="container-custom">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-sm text-primary font-medium">TESTIMONIALS</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">What Our Students Say</h2>
          <p className="text-gray-300">
            Don't just take our word for it. Here's what our students have to say about their experiences at Alpe d'Huez Biking School.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-dark-800 p-6 rounded-lg border border-gray-700 hover:border-primary transition-colors"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <svg className="text-primary mb-4" width="30" height="30" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9999 14.1999H6.79994L10.1999 7.19995H5.99994V2.39995H13.1999V7.79995L11.9999 14.1999ZM21.5999 14.1999H16.3999L19.7999 7.19995H15.5999V2.39995H22.7999V7.79995L21.5999 14.1999Z" />
              </svg>
              <p className="text-gray-300">{testimonial.quote}</p>
              <div className="flex mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star} 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-yellow-500" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
