


// Main JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
  // Add active class to current navigation item
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
      const linkHref = link.getAttribute('href');
      if (linkHref === currentPage || 
          (currentPage === '' && linkHref === 'index.html')) {
          link.classList.add('active');
      }
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
              });
          }
      });
  });
  
  // Add animation to elements when they come into view
  const animateOnScroll = function() {
      const elements = document.querySelectorAll('.fade-in');
      
      elements.forEach(element => {
          const elementPosition = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          
          if (elementPosition < windowHeight - 50) {
              element.classList.add('visible');
          }
      });
  };
  
  // Add fade-in class to elements that should animate
  const sectionsToAnimate = document.querySelectorAll('section, .skills-highlight, .experience-item, .education-item, .portfolio-item');
  sectionsToAnimate.forEach(section => {
      section.classList.add('fade-in');
  });
  
  // Initial check for elements in view
  animateOnScroll();
  
  // Check for elements in view on scroll
  window.addEventListener('scroll', animateOnScroll);
  
  // Add animation styles
  const style = document.createElement('style');
  style.textContent = `
      .fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
      }
      
      .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
      }
  `;
  document.head.appendChild(style);
});
