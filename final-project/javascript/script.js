document.addEventListener("DOMContentLoaded", () => {


    console.log("DOM Content Loaded!");

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

  // Select all the logos
const schoolLogos = document.querySelectorAll(".schoolLogo");

// Loop through each logo and add hover event listeners
schoolLogos.forEach((logo) => {
  const originalSrc = logo.src; 
  const colorSrc = logo.dataset.color; 

  // On hover, switch to the colored image
  logo.addEventListener("mouseover", () => {
    logo.src = colorSrc;
  });

  // On mouseout, switch back to the original grey image
  logo.addEventListener("mouseout", () => {
    logo.src = originalSrc;
  });
});

    document.addEventListener("scroll", () => {
    
    // Handle nav element scrolling
    const nav = document.querySelector(".nav");
    const navElementContainer = document.querySelector(".navElementContainer");
    const introText = document.querySelector("#introText");
    const heroIntro = document.querySelector("#heroIntro");
  
    // Get the bottom position of the hero section
    const heroBottom = heroIntro.getBoundingClientRect().bottom;
  
    if (heroBottom <= 0) {
      if (!nav.contains(navElementContainer)) {
        nav.appendChild(navElementContainer);
        nav.style.display = "flex"; 
        nav.style.flexDirection = "row"; 
        nav.style.alignItems = "center"; 
        navElementContainer.style.display = "flex"; 
        navElementContainer.style.flexDirection = "row"; 
        navElementContainer.style.gap = "12px"; 
        navElementContainer.style.margin = "0"; 
        navElementContainer.style.fontFamily = '"Poppins", sans-serif'; 
        navElementContainer.style.fontWeight = "300"; 
        navElementContainer.style.fontStyle = "normal"; 
        navElementContainer.style.background = "transparent";
      }
    } else {
      if (!introText.contains(navElementContainer)) {
        introText.appendChild(navElementContainer);
        nav.style.display = ""; 
        nav.style.background = "transparent";
        navElementContainer.style.display = "flex";
        navElementContainer.style.flexDirection = "row";
        navElementContainer.style.gap = "12px";
        navElementContainer.style.margin = "24px 0 0 0"; 
      }
    }
  
    // Handle the blurred navbar when scrolling
    if (window.scrollY > 0) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  
  async function fetchCurrentTime() {
    const BASE_URL = "http://worldtimeapi.org/api/timezone/America/New_York";
    try {
      const response = await fetch(BASE_URL);
      if (!response.ok) throw new Error("Failed to fetch time");
      const data = await response.json();
      const currentTime = data.datetime;
      const timeObject = new Date(currentTime);
      updateTimeText(timeObject);
    } catch (error) {
      console.error("Error fetching current time:", error);
      document.getElementById("timeInfo").textContent = "Unable to fetch the current time.";
    }
  }
  
  function updateTimeText(timeObject) {
    const hours = timeObject.getHours();
    const day = timeObject.getDay(); 
    let message = "";
  
    const isWeekend = day === 0 || day === 6; // Sunday (0) or Saturday (6)
  
    if (isWeekend) {
      if (hours >= 1 && hours < 9) {
        message = "I'm probably catching up on sleep...zzz";
      } else if (hours >= 9 && hours < 11) {
        message = "I'm probably having a glass of blueberry banana milkshake while watching Netflix ";
      } else if (hours >= 11 && hours < 16) {
        message = "I'm probably catching up on assignments.";
      } else if (hours >= 16 && hours < 20) {
        message = "I'm probably hanging out with friends or going for a run.";
      } else {
        message = "I'm probably watching a movie with a hot cocoa in bed.";
      }
    } else {
      // Weekday schedule
      if (hours >= 1 && hours < 7) {
        message = "I'm probably in bed sleeping right now...zzz";
      } else if (hours >= 7 && hours < 17) {
        message = "I'm probably mastering the art of human-computer interaction.";
      } else if (hours >= 17 && hours < 19) {
        message = "I'm probably going for a run.";
      } else if (hours >= 19 && hours < 24) {
        message = "I'm probably catching up on assignments.";
      }
    }
  
    const timeInfo = document.getElementById("timeInfo");
    const formattedTime = timeObject.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  
    timeInfo.textContent = `It's now ${formattedTime} in Pittsburgh. ${message}`;
  }
  
  fetchCurrentTime();
  

  const annotate = RoughNotation.annotate;
  const annotationGroup = RoughNotation.annotationGroup;
  const $ = (t) => document.querySelector(t);
  
    const a1 = annotate(document.querySelector('#highlightOne'), { type: 'highlight', color: '#f5c749' });
    const a2 = annotate(document.querySelector('#highlightTwo'), { type: 'highlight', color: '#f5c749' });
    
    const ag = annotationGroup([a1, a2]);
    ag.show();

  });
