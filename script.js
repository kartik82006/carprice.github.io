const element = document.getElementsByClassName("card-item");
const smalltext = document.getElementsByName('ytext');

const element1 = document.getElementsByClassName("benefit-item");

    // Add class on hover (mouseenter)
    
      element[0].addEventListener("mouseenter", function(){
      smalltext[1].classList.add("get-yellow");
      
      
    });

    // Remove class when hover ends (mouseleave)
    element[0].addEventListener("mouseleave", function() {
      smalltext[1].classList.remove("get-yellow");
    });
    
    element[1].addEventListener("mouseenter", function(){
      smalltext[2].classList.add("get-yellow");
      
      
    });

    // Remove class when hover ends (mouseleave)
    element[1].addEventListener("mouseleave", function() {
      smalltext[2].classList.remove("get-yellow");
    });
    element[2].addEventListener("mouseenter", function(){
      smalltext[3].classList.add("get-yellow");
      
      
    });

    // Remove class when hover ends (mouseleave)
    element[2].addEventListener("mouseleave", function() {
      smalltext[3].classList.remove("get-yellow");
    });
    
    element[3].addEventListener("mouseenter", function(){
      smalltext[4].classList.add("get-yellow");
      
      
    });

    // Remove class when hover ends (mouseleave)
    element[3].addEventListener("mouseleave", function() {
      smalltext[4].classList.remove("get-yellow");
    });



    element1[0].addEventListener("mouseenter", function(){
      smalltext[5].classList.add("get-yellow");
      
      
    });

    // Remove class when hover ends (mouseleave)
    element1[0].addEventListener("mouseleave", function() {
      smalltext[5].classList.remove("get-yellow");
    });

    element1[1].addEventListener("mouseenter", function(){
      smalltext[6].classList.add("get-yellow");
      
      
    });

    // Remove class when hover ends (mouseleave)
    element1[1].addEventListener("mouseleave", function() {
      smalltext[6].classList.remove("get-yellow");
    });
    

    element1[2].addEventListener("mouseenter", function(){
      smalltext[7].classList.add("get-yellow");
      
      
    });

    // Remove class when hover ends (mouseleave)
    element1[2].addEventListener("mouseleave", function() {
      smalltext[7].classList.remove("get-yellow");
    });

    element1[3].addEventListener("mouseenter", function(){
      smalltext[8].classList.add("get-yellow");
      
      
    });

    // Remove class when hover ends (mouseleave)
    element1[3].addEventListener("mouseleave", function() {
      smalltext[8].classList.remove("get-yellow");
    });
    
    element1[4].addEventListener("mouseenter", function(){
      smalltext[9].classList.add("get-yellow");
      
      
    });

    // Remove class when hover ends (mouseleave)
    element1[4].addEventListener("mouseleave", function() {
      smalltext[9].classList.remove("get-yellow");
    });

    element1[5].addEventListener("mouseenter", function(){
      smalltext[10].classList.add("get-yellow");
      
      
    });

    // Remove class when hover ends (mouseleave)
    element1[5].addEventListener("mouseleave", function() {
      smalltext[10].classList.remove("get-yellow");
    });

    const fet2 =  document.getElementsByClassName("benefit-item");
    fet2[0].addEventListener("mouseenter",function(){
      this.setAttribute('scale',2);
    })

