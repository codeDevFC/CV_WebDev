


// Portfolio specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Portfolio filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  filterButtons.forEach(button => {
      button.addEventListener('click', function() {
          // Remove active class from all buttons
          filterButtons.forEach(btn => btn.classList.remove('active'));
          
          // Add active class to clicked button
          this.classList.add('active');
          
          // Get filter value
          const filterValue = this.getAttribute('data-filter');
          
          // Filter portfolio items
          portfolioItems.forEach(item => {
              const categories = item.getAttribute('data-category').split(' ');
              
              if (filterValue === 'all' || categories.includes(filterValue)) {
                  item.style.display = 'block';
                  
                  // Add animation
                  setTimeout(() => {
                      item.style.opacity = '1';
                      item.style.transform = 'translateY(0)';
                  }, 100);
              } else {
                  item.style.opacity = '0';
                  item.style.transform = 'translateY(20px)';
                  
                  setTimeout(() => {
                      item.style.display = 'none';
                  }, 300);
              }
          });
      });
  });
  
  // Initialize Lightbox for portfolio images if needed
  const portfolioImages = document.querySelectorAll('.portfolio-img img');
  
  portfolioImages.forEach(image => {
      image.addEventListener('click', function(e) {
          // Prevent click if the user is clicking on a button
          if (e.target.closest('.overlay-btn')) return;
          
          const overlay = image.parentElement.querySelector('.portfolio-overlay');
          
          // Toggle overlay visibility on image click
          if (overlay.style.opacity === '1') {
              overlay.style.opacity = '0';
          } else {
              overlay.style.opacity = '1';
          }
      });
  });
});
