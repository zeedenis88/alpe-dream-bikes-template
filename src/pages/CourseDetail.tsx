
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";

const CourseDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // This would typically come from an API or database
  // For this example, we'll use a simple object
  const courses = {
    "beginner-mountain-biking": {
      title: "Beginner Mountain Biking Course",
      level: "Beginner",
      duration: "2 Days",
      schedule: "Weekend courses (Sat-Sun) from 9am to 4pm",
      price: "€199",
      image: "https://images.unsplash.com/photo-1526137988989-a425cb05e2c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
        "https://images.unsplash.com/photo-1622473541207-c69872823952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      ],
      description: "Perfect for first-time mountain bikers or those with limited off-road experience, our Beginner Mountain Biking Course provides a comprehensive introduction to the exciting world of mountain biking. Over two days, you'll build confidence, learn fundamental skills, and enjoy riding on scenic beginner-friendly trails in the beautiful Alpe d'Huez region.",
      instructors: [
        {
          name: "Jean Martin",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          bio: "Former professional mountain biker with 10+ years of coaching experience. Jean specializes in building confidence in new riders."
        },
        {
          name: "Sophie Dubois",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          bio: "Certified mountain bike instructor with a patient teaching approach. Sophie is passionate about introducing newcomers to the sport."
        }
      ],
      curriculum: [
        {
          day: "Day 1",
          topics: [
            "Introduction to mountain biking equipment and safety",
            "Basic bike handling skills on flat terrain",
            "Proper body positioning and balance",
            "Fundamental braking techniques",
            "Simple climbing and descending techniques",
            "Practice sessions on beginner trails"
          ]
        },
        {
          day: "Day 2",
          topics: [
            "Review of day one skills",
            "Introduction to cornering techniques",
            "Navigating simple trail obstacles",
            "Basic trail reading skills",
            "Longer guided ride on beginner trails",
            "Next steps and progression advice"
          ]
        }
      ],
      whatsIncluded: [
        "Professional instruction from certified coaches",
        "High-quality mountain bike rental (if needed)",
        "Safety equipment including helmet",
        "Trail access fees",
        "Lunch and refreshments both days",
        "Course completion certificate"
      ],
      requirements: [
        "No previous mountain biking experience necessary",
        "Basic ability to ride a bicycle",
        "Reasonable level of fitness",
        "Minimum age: 12 years old"
      ],
      faqs: [
        {
          question: "Do I need my own bike?",
          answer: "No, we provide high-quality mountain bikes suitable for beginners. However, you're welcome to bring your own bike if you prefer."
        },
        {
          question: "What should I wear?",
          answer: "Comfortable athletic clothing appropriate for the weather, closed-toe shoes, and preferably padded cycling shorts. Avoid loose pants that could get caught in the bike."
        },
        {
          question: "What happens if it rains?",
          answer: "We typically run courses in light rain with appropriate clothing. In case of severe weather, we may reschedule or modify the course structure."
        },
        {
          question: "Is lunch included?",
          answer: "Yes, we provide a nutritious lunch each day as well as snacks and refreshments throughout the course."
        },
        {
          question: "How many people are in each course?",
          answer: "We maintain small group sizes of maximum 6 students per instructor to ensure personalized attention and safety."
        }
      ]
    }
  };
  
  const course = slug ? courses[slug as keyof typeof courses] : null;
  
  if (!course) {
    return (
      <div>
        <Navbar />
        <div className="container-custom min-h-screen pt-24 pb-16">
          <h1 className="text-3xl font-bold mb-4">Course not found</h1>
          <p>The course you're looking for doesn't exist or has been removed.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      
      {/* Course Hero Section */}
      <div className="pt-24 bg-secondary">
        <div className="container-custom py-12">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                {course.level} Level
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mt-3 mb-4">{course.title}</h1>
              <div className="flex flex-wrap gap-4 mb-6 text-gray">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{course.schedule}</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <span>{course.price}</span>
                </div>
              </div>
              <p className="mb-6 text-gray-700">
                {course.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="btn btn-primary">Book This Course</Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Download Brochure
                </Button>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Course Details Section */}
      <div className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Course Curriculum */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
                <div className="space-y-6">
                  {course.curriculum.map((day, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-bold text-primary mb-4">{day.day}</h3>
                      <ul className="space-y-3">
                        {day.topics.map((topic, i) => (
                          <li key={i} className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* What's Included */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">What's Included</h2>
                <div className="bg-secondary p-6 rounded-lg">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.whatsIncluded.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Gallery */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Course Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {course.gallery.map((image, index) => (
                    <div key={index} className="overflow-hidden rounded-lg">
                      <img 
                        src={image} 
                        alt={`Course image ${index + 1}`} 
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Course Instructors */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Meet Your Instructors</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {course.instructors.map((instructor, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row md:items-center">
                      <img 
                        src={instructor.image} 
                        alt={instructor.name} 
                        className="w-24 h-24 rounded-full object-cover mb-4 md:mb-0 md:mr-4"
                      />
                      <div>
                        <h3 className="text-lg font-bold mb-2">{instructor.name}</h3>
                        <p className="text-gray">{instructor.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Requirements */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Requirements</h2>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <ul className="space-y-3">
                    {course.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* FAQs */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {course.faqs.map((faq, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                      <p className="text-gray">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
                <h3 className="text-xl font-bold mb-4">Book This Course</h3>
                <p className="text-gray mb-3">
                  Ready to improve your mountain biking skills? Book now to secure your spot in our popular beginner course.
                </p>
                
                <div className="border-t border-b py-4 my-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Course Fee:</span>
                    <span className="font-bold">{course.price}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">Duration:</span>
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Next Available:</span>
                    <span>June 10-11, 2023</span>
                  </div>
                </div>
                
                <Button className="w-full btn btn-primary mb-4">Book Now</Button>
                <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-100">
                  Contact Us
                </Button>
                
                <div className="mt-6 bg-secondary rounded-md p-4">
                  <p className="text-sm text-gray-700">
                    Need more information? Call us at <span className="font-bold text-primary">+33 4 76 80 45 67</span> or email <span className="font-bold text-primary">info@alpedhuezbiking.com</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CourseDetail;
