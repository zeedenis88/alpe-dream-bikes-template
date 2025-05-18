
import React from "react";
import CourseCard from "./CourseCard";
import { Button } from "./ui/button";

const CoursesSection = () => {
  const courses = [
    {
      id: "1",
      title: "Beginner Mountain Biking Course",
      level: "Beginner",
      duration: "2 Days",
      price: "€199",
      image: "https://images.unsplash.com/photo-1526137988989-a425cb05e2c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      features: [
        "Basic bike handling skills",
        "Trail safety and etiquette",
        "Braking and balance techniques",
        "Equipment included",
        "Small group sizes"
      ],
      slug: "beginner-mountain-biking"
    },
    {
      id: "2",
      title: "Intermediate Trail Riding",
      level: "Intermediate",
      duration: "3 Days",
      price: "€299",
      image: "https://images.unsplash.com/photo-1561130526-284df82778a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      features: [
        "Advanced cornering techniques",
        "Flow trail riding skills",
        "Small jumps and drops",
        "Line selection skills",
        "Video analysis feedback"
      ],
      slug: "intermediate-trail-riding"
    },
    {
      id: "3",
      title: "Advanced Downhill Techniques",
      level: "Advanced",
      duration: "2 Days",
      price: "€349",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      features: [
        "Technical downhill riding",
        "Jumps and drop-offs mastery",
        "High-speed cornering",
        "Advanced braking techniques",
        "Expert instructor guidance"
      ],
      slug: "advanced-downhill-techniques"
    }
  ];

  return (
    <section className="section-padding" id="courses">
      <div className="container-custom">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-sm text-primary font-medium">POPULAR COURSES</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Find The Right Course For Your Skill Level</h2>
          <p className="text-gray">
            Our professional instructors offer a range of courses designed to help you develop your mountain biking skills, no matter your experience level.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="btn btn-primary">View All Courses</Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
