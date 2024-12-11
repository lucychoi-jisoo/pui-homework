document.addEventListener("DOMContentLoaded", () => {


    AOS.init({
        // Global settings:
        disable: false, 
        startEvent: 'DOMContentLoaded', 
        initClassName: 'aos-init', 
        animatedClassName: 'aos-animate', 
        useClassNames: false, 
        disableMutationObserver: false, 
        debounceDelay: 50, 
        throttleDelay: 99, 
        
        offset: 120, 
        delay: 0, 
        duration: 400, 
        easing: 'ease', 
        once: false, 
        mirror: false, 
        anchorPlacement: 'top-bottom', 
      
      });
  
      document.addEventListener('aos:in', ({ detail }) => {
          console.log('animated in', detail);
        });
        
        document.addEventListener('aos:out', ({ detail }) => {
          console.log('animated out', detail);
        });
        
    new kursor({
      type: 1, 
      removeDefaultCursor: true, 
      shape: "circle", 
      size: 15, 
      speed: 0.1, 
      easing: "ease", 
      
    });

    document.addEventListener('scroll', function () {
      let sections = ['#problemFraming', '#interviewInsights', '#hypothesis', '#designProcess', '#userTest'];
      let links = document.querySelectorAll('.floating-nav a');
      
      let currentSection = sections.find(section => {
        let element = document.querySelector(section);
        let rect = element.getBoundingClientRect();
        return rect.top <= 0 && rect.bottom >= 0;
      });
    
      links.forEach(link => {
        link.classList.remove('active');
        if (currentSection && link.getAttribute('href') === currentSection) {
          link.classList.add('active');
        }
      });
    });

    // JavaScript to show the floating-nav after scrolling
window.addEventListener('scroll', function() {
  const floatingNav = document.querySelector('.floating-nav');
  const scrollThreshold = 50;  
  
  if (window.scrollY > scrollThreshold) {
      floatingNav.style.display = 'flex';  
  } else {
      floatingNav.style.display = 'none'; 
  }
});
    
    
  });