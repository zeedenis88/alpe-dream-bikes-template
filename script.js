
document.addEventListener('DOMContentLoaded', function() {
  // Current year for footer copyright
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  
  function handleScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check
  
  // Mobile Menu
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');
  
  function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
    
    // Create or remove overlay
    if (mobileMenu.classList.contains('active')) {
      if (!document.querySelector('.mobile-menu-overlay')) {
        const overlay = document.createElement('div');
        overlay.className = 'mobile-menu-overlay active';
        document.body.appendChild(overlay);
        
        overlay.addEventListener('click', closeMobileMenu);
      }
    } else {
      const overlay = document.querySelector('.mobile-menu-overlay');
      if (overlay) {
        overlay.remove();
      }
    }
  }
  
  function closeMobileMenu() {
    mobileMenu.classList.remove('active');
    document.body.classList.remove('menu-open');
    
    const overlay = document.querySelector('.mobile-menu-overlay');
    if (overlay) {
      overlay.remove();
    }
  }
  
  mobileMenuToggle.addEventListener('click', toggleMobileMenu);
  mobileMenuClose.addEventListener('click', closeMobileMenu);
  
  // Mobile accordions
  const mobileAccordions = document.querySelectorAll('.mobile-accordion-trigger');
  
  mobileAccordions.forEach(accordion => {
    accordion.addEventListener('click', function() {
      const parent = this.parentElement;
      parent.classList.toggle('active');
    });
  });
  
  // Language Switcher
  const languageOptions = document.querySelectorAll('.language-option');
  const mobileLanguageOptions = document.querySelectorAll('.mobile-language-option');
  
  function switchLanguage(lang) {
    // Update all language selectors
    document.querySelectorAll('.language-option').forEach(option => {
      option.classList.toggle('active', option.dataset.lang === lang);
    });
    
    document.querySelectorAll('.mobile-language-option').forEach(option => {
      option.classList.toggle('active', option.dataset.lang === lang);
    });
    
    // Update dropdown trigger text
    const flag = getLangFlag(lang);
    document.querySelector('.language-selector .flag').textContent = flag;
    document.querySelector('.language-selector span:not(.flag)').textContent = lang;
    
    // Here you would handle actual language switching logic
    console.log(`Switched to language: ${lang}`);
  }
  
  function getLangFlag(lang) {
    switch(lang) {
      case 'EN': return '🇬🇧';
      case 'FR': return '🇫🇷';
      case 'DE': return '🇩🇪';
      default: return '🇬🇧';
    }
  }
  
  languageOptions.forEach(option => {
    option.addEventListener('click', function() {
      switchLanguage(this.dataset.lang);
    });
  });
  
  mobileLanguageOptions.forEach(option => {
    option.addEventListener('click', function() {
      switchLanguage(this.dataset.lang);
      closeMobileMenu();
    });
  });
  
  // Services Section
  const services = [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>`,
      title: "Beginner Courses",
      description: "Perfect for first-timers and those looking to build confidence on two wheels. Learn the fundamentals in a safe environment.",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
              <line x1="9" y1="9" x2="9.01" y2="9"></line>
              <line x1="15" y1="9" x2="15.01" y2="9"></line>
            </svg>`,
      title: "Intermediate Training",
      description: "Ready to level up? Our intermediate courses focus on technical skills, jumps, and handling more challenging terrain.",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
            </svg>`,
      title: "Advanced Techniques",
      description: "For experienced riders looking to master advanced techniques, challenging descents, and expert-level trails.",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>`,
      title: "Private Lessons",
      description: "One-on-one instruction tailored to your specific goals and needs. Accelerate your progress with personalized coaching.",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>`,
      title: "Group Adventures",
      description: "Join our guided group rides and explore the beautiful trails of Alpe d'Huez with fellow biking enthusiasts.",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>`,
      title: "Equipment Rental",
      description: "Access to high-quality mountain bikes, safety gear, and equipment, carefully maintained for optimal performance.",
    }
  ];
  
  const servicesGrid = document.querySelector('.services-grid');
  
  if (servicesGrid) {
    services.forEach(service => {
      const serviceCard = document.createElement('div');
      serviceCard.className = 'service-card';
      serviceCard.innerHTML = `
        <div class="service-icon">${service.icon}</div>
        <h3 class="service-title">${service.title}</h3>
        <p class="service-description">${service.description}</p>
        <a href="#" class="service-link">
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
      `;
      servicesGrid.appendChild(serviceCard);
    });
  }
  
  // Courses Section
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
  
  const coursesGrid = document.querySelector('.courses-grid');
  
  if (coursesGrid) {
    courses.forEach(course => {
      const courseCard = document.createElement('div');
      courseCard.className = 'course-card';
      
      let featuresHTML = '';
      course.features.forEach(feature => {
        featuresHTML += `
          <li class="course-feature">
            <svg class="feature-check" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
            <span>${feature}</span>
          </li>
        `;
      });
      
      courseCard.innerHTML = `
        <img src="${course.image}" alt="${course.title}" class="course-image">
        <div class="course-content">
          <div class="course-header">
            <span class="course-level">${course.level}</span>
            <span class="course-price">${course.price}</span>
          </div>
          <h3 class="course-title">${course.title}</h3>
          <div class="course-meta">
            <div class="course-meta-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              ${course.duration}
            </div>
          </div>
          <ul class="course-features">
            ${featuresHTML}
          </ul>
          <button class="btn btn-primary course-button">Book Now</button>
        </div>
      `;
      coursesGrid.appendChild(courseCard);
    });
  }
  
  // Testimonials Section
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
  
  const testimonialsGrid = document.querySelector('.testimonials-grid');
  
  if (testimonialsGrid) {
    testimonials.forEach(testimonial => {
      const testimonialCard = document.createElement('div');
      testimonialCard.className = 'testimonial-card';
      
      testimonialCard.innerHTML = `
        <div class="testimonial-header">
          <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-image">
          <div>
            <h4 class="testimonial-author">${testimonial.name}</h4>
            <div class="testimonial-role">${testimonial.role}</div>
          </div>
        </div>
        <div class="testimonial-quote-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9999 14.1999H6.79994L10.1999 7.19995H5.99994V2.39995H13.1999V7.79995L11.9999 14.1999ZM21.5999 14.1999H16.3999L19.7999 7.19995H15.5999V2.39995H22.7999V7.79995L21.5999 14.1999Z" />
          </svg>
        </div>
        <p class="testimonial-quote">${testimonial.quote}</p>
        <div class="testimonial-rating">
          ${Array(5).fill('<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>').join('')}
        </div>
      `;
      testimonialsGrid.appendChild(testimonialCard);
    });
  }
  
  // Form submission prevention
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
});
