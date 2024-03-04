

$(document).ready(function() {
    $(".hamburger-button").click(function() {
        $(this).toggleClass("active");
        $(".mobile-menu").fadeToggle();
    });

    $(".close-button").click(function() {
        $(".hamburger-button").removeClass("active");
        $(".mobile-menu").fadeOut();
    });

    // Hide close button initially
    $(".close-button").hide();

    AOS.init();
    
    // Add a click event to the links in the mobile menu to close the menu when clicked
    $(".mobile-menu a").click(function() {
        $(".hamburger-button").removeClass("active");
        $(".mobile-menu").fadeOut();
    });
    
    // Add a click event to the document body to close the menu when clicked outside
    $(document.body).click(function(event) {
        // Check if the clicked element is not part of the mobile menu or the hamburger button
        if (!$(event.target).closest('.mobile-menu').length && !$(event.target).closest('.hamburger-button').length) {
            $(".hamburger-button").removeClass("active");
            $(".mobile-menu").fadeOut();
        }
    });
});


/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


  //* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}



$('.testimon-slider-container').slick({
  autoplay: true,        // Do we want it to autoplay? true or false
	autoplaySpeed: 3000,   // How long between each slide when autoplaying
	speed: 500,            // How fast is the transition 
  arrows: false,          // Do you want to show arrows to trigger each slide
  accessibility: true,   // Enables tabbing and arrow key navigation 
  dots: true,            // Enables the dots below to show how many slides
  fade: false,           // Changes the animate from slide to fade if true
  infinite: true,       // When true, means that it will scroll in a circle
  pauseOnHover: true,   // When true means the autoplay pauses when hovering
  pauseOnDotsHover: true // Pauses the autoplay when hovering over the dots
});

$(".testimonial-slider-container").slick({
    autoplay: true,
    autoplaySpeed: 2e3,
    speed: 600,
    arrows: true,
    accessibility: true,
    dots: true,
    fade: false,
    infinite: false,
    pauseOnHover: false,
    pauseOnDotsHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    }]
});