
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo";
import { Button } from "./ui/button";
import { ChevronDown, Menu, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const changeLang = (lang: string) => {
    setCurrentLang(lang);
  };

  const getFlagEmoji = (countryCode: string) => {
    switch(countryCode) {
      case "EN":
        return "🇬🇧";
      case "FR":
        return "🇫🇷";
      case "DE":
        return "🇩🇪";
      default:
        return "🇬🇧";
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3 bg-white shadow-md" : "py-5 bg-transparent"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="z-10">
          <Logo />
        </Link>
        
        {/* Desktop menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            <Link to="/" className="font-medium hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="font-medium hover:text-primary transition-colors">About Us</Link>
            
            {/* Courses dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="font-medium hover:text-primary transition-colors flex items-center space-x-1">
                <span>Courses</span>
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg rounded-md overflow-hidden z-50">
                <DropdownMenuItem asChild>
                  <Link to="/courses/beginner" className="cursor-pointer hover:bg-gray-100">Beginner Courses</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/courses/intermediate" className="cursor-pointer hover:bg-gray-100">Intermediate Courses</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/courses/advanced" className="cursor-pointer hover:bg-gray-100">Advanced Courses</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/courses" className="cursor-pointer hover:bg-gray-100">All Courses</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/trails" className="font-medium hover:text-primary transition-colors">Trails</Link>
            <Link to="/equipment" className="font-medium hover:text-primary transition-colors">Equipment</Link>
            <Link to="/contact" className="font-medium hover:text-primary transition-colors">Contact</Link>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Language selector dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 font-medium">
                <span className="mr-1">{getFlagEmoji(currentLang)}</span>
                <span>{currentLang}</span>
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg rounded-md overflow-hidden">
                <DropdownMenuItem onClick={() => changeLang("EN")} className="cursor-pointer">
                  <span className="mr-2">🇬🇧</span>English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLang("FR")} className="cursor-pointer">
                  <span className="mr-2">🇫🇷</span>Français
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => changeLang("DE")} className="cursor-pointer">
                  <span className="mr-2">🇩🇪</span>Deutsch
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button className="btn btn-primary">Book Now</Button>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden z-10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
        
        {/* Mobile menu */}
        <div 
          className={`fixed top-0 right-0 h-full w-[80%] bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-8">
            <div className="mb-8">
              <Logo />
            </div>
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              
              {/* Mobile dropdown for Courses */}
              <div className="py-2">
                <button 
                  className="flex items-center justify-between w-full font-medium hover:text-primary transition-colors"
                  onClick={() => {
                    const courseSubmenu = document.getElementById("course-submenu");
                    if (courseSubmenu) {
                      courseSubmenu.classList.toggle("hidden");
                    }
                  }}
                >
                  <span>Courses</span>
                  <ChevronDown size={16} />
                </button>
                <div id="course-submenu" className="hidden pl-4 mt-2 space-y-2">
                  <Link 
                    to="/courses/beginner" 
                    className="block py-1 hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Beginner Courses
                  </Link>
                  <Link 
                    to="/courses/intermediate" 
                    className="block py-1 hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Intermediate Courses
                  </Link>
                  <Link 
                    to="/courses/advanced" 
                    className="block py-1 hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Advanced Courses
                  </Link>
                  <Link 
                    to="/courses" 
                    className="block py-1 hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    All Courses
                  </Link>
                </div>
              </div>
              
              <Link 
                to="/trails" 
                className="font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Trails
              </Link>
              <Link 
                to="/equipment" 
                className="font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Equipment
              </Link>
              <Link 
                to="/contact" 
                className="font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="pt-4 flex flex-col space-y-4">
                <div className="flex space-x-4">
                  <button 
                    onClick={() => {
                      changeLang("EN");
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3 py-1 rounded flex items-center ${currentLang === "EN" ? "bg-primary text-white" : "bg-gray-100"}`}
                  >
                    <span className="mr-2">🇬🇧</span>EN
                  </button>
                  <button 
                    onClick={() => {
                      changeLang("FR");
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3 py-1 rounded flex items-center ${currentLang === "FR" ? "bg-primary text-white" : "bg-gray-100"}`}
                  >
                    <span className="mr-2">🇫🇷</span>FR
                  </button>
                  <button 
                    onClick={() => {
                      changeLang("DE");
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3 py-1 rounded flex items-center ${currentLang === "DE" ? "bg-primary text-white" : "bg-gray-100"}`}
                  >
                    <span className="mr-2">🇩🇪</span>DE
                  </button>
                </div>
                <Button 
                  className="w-full btn btn-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Overlay for mobile menu */}
        {mobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
