
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo";
import { Button } from "./ui/button";
import { ChevronDown, Menu } from "lucide-react";

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
            <Link to="/courses" className="font-medium hover:text-primary transition-colors">Courses</Link>
            <Link to="/trails" className="font-medium hover:text-primary transition-colors">Trails</Link>
            <Link to="/equipment" className="font-medium hover:text-primary transition-colors">Equipment</Link>
            <Link to="/contact" className="font-medium hover:text-primary transition-colors">Contact</Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="language-selector">
              <button className="flex items-center space-x-1">
                <span>{currentLang}</span>
                <ChevronDown size={16} />
              </button>
              <div className="language-dropdown">
                <button 
                  onClick={() => changeLang("EN")} 
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  English
                </button>
                <button 
                  onClick={() => changeLang("FR")} 
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  Français
                </button>
                <button 
                  onClick={() => changeLang("DE")} 
                  className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                >
                  Deutsch
                </button>
              </div>
            </div>
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
              <Link 
                to="/courses" 
                className="font-medium py-2 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Courses
              </Link>
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
                    className={`px-3 py-1 rounded ${currentLang === "EN" ? "bg-primary text-white" : "bg-gray-100"}`}
                  >
                    EN
                  </button>
                  <button 
                    onClick={() => {
                      changeLang("FR");
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3 py-1 rounded ${currentLang === "FR" ? "bg-primary text-white" : "bg-gray-100"}`}
                  >
                    FR
                  </button>
                  <button 
                    onClick={() => {
                      changeLang("DE");
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3 py-1 rounded ${currentLang === "DE" ? "bg-primary text-white" : "bg-gray-100"}`}
                  >
                    DE
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
