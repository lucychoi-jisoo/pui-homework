document.addEventListener("DOMContentLoaded", () => {
      new TypeIt("#receipt-header", {
        strings: ["My Receipt"], 
        speed: 50, 
        cursor: true, 
        loop: false, 
        breakLines: true, 
      }).go();

      new kursor({
        type: 1, 
        removeDefaultCursor: true, 
        shape: "circle", 
        size: 15, 
        speed: 0.1,
        easing: "ease", 
        
      });
      
    });