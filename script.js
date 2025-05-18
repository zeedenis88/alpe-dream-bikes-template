
document.addEventListener('DOMContentLoaded', function() {
  // Navigation Toggle
  const navToggle = document.getElementById('navToggle');
  const navbar = document.getElementById('navbar');
  
  if (navToggle) {
    navToggle.addEventListener('click', function() {
      navbar.classList.toggle('active');
    });
  }
  
  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (navbar && navbar.classList.contains('active') && !navbar.contains(event.target) && event.target !== navToggle) {
      navbar.classList.remove('active');
    }
  });
  
  // Course Gallery Thumbnails
  const thumbnails = document.querySelectorAll('.thumbnail-images img');
  const mainImage = document.querySelector('.main-image img');
  
  if (thumbnails.length && mainImage) {
    thumbnails.forEach(thumb => {
      thumb.addEventListener('click', function() {
        // Update main image
        mainImage.src = this.src;
        
        // Update active state
        thumbnails.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
      });
    });
  }
  
  // Tab Navigation
  const tabButtons = document.querySelectorAll('.tab-button');
  const tabPanels = document.querySelectorAll('.tab-panel');
  
  if (tabButtons.length && tabPanels.length) {
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Get the tab to show
        const tabToShow = this.getAttribute('data-tab');
        
        // Hide all panels
        tabPanels.forEach(panel => {
          panel.classList.remove('active');
        });
        
        // Show selected panel
        document.getElementById(tabToShow).classList.add('active');
        
        // Update active state on buttons
        tabButtons.forEach(btn => {
          btn.classList.remove('active');
        });
        this.classList.add('active');
      });
    });
  }
  
  // Simple form submission prevention
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Form submission is disabled in this demo. In a real application, this would submit data to the server.');
    });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href !== '#') {
        e.preventDefault();
        
        const targetSection = document.querySelector(href);
        if (targetSection) {
          const offsetTop = targetSection.offsetTop;
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Simple animation on scroll
  // This adds a simple fade-in effect to elements as they come into view
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.service-card, .course-card, .testimonial-card, .section-header');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Set initial state for animation
  document.querySelectorAll('.service-card, .course-card, .testimonial-card, .section-header').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  // Run animation on page load and scroll
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
});
