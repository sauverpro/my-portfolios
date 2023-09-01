 // When the user scrolls the page, execute myFunction
 window.onscroll = function () {
    myFunction();
  };

  // Get the navbar
  var navbar = document.getElementById("navbar");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
      navbar.style.background = "#007BFF";
    }
  }
//   hello there
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// Automatically advance the slides every 5 seconds
setInterval(() => {
  slideIndex = (slideIndex + 1) % carousel.children.length;
  updateCarousel();
}, 1000);


// form validation 
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const formMessage = document.getElementById("form-message");

    if (name === "" || email === "" || message === "") {
        formMessage.innerHTML = "Please fill in all required fields.";
        formMessage.style.color = "red";
        return false;
    }

    // You can add more specific validation here, such as checking email format.

    // If all validation passes, you can submit the form.
    formMessage.innerHTML = "Form submitted successfully!";
    formMessage.style.color = "blue";
    return true;
}

  // JavaScript function to toggle the mobile menu
  function toggleMobileMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("active");
}

// JavaScript function to hide the mobile menu when a menu item is clicked
function hideMobileMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.remove("active");
}