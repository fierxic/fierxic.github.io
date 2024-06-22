// Get the button:
let mybutton = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.onclick = function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.onclick = function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Dynamic Greeting
// function getGreeting() {
//     const now = new Date();
//     const hours = now.getHours();
//     let greeting;
//     if (hours < 12) {
//         greeting = "Good Morning!";
//     } else if (hours < 18) {
//         greeting = "Good Afternoon!";
//     } else {
//         greeting = "Good Evening!";
//     }
//     console.log("Current Time: " + now);
//     console.log("Greeting: " + greeting);
//     document.getElementById('greeting').textContent = greeting;
// }
// document.addEventListener('DOMContentLoaded', getGreeting);

// Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const formMessage = document.getElementById('formMessage');

    // Clear any previous messages
    formMessage.textContent = "";
    formMessage.style.color = "red";

    if (name === "" || email === "") {
        formMessage.textContent = "Please fill out all fields.";
    } else if (!validateEmail(email)) {
        formMessage.textContent = "Please enter a valid email address.";
    } else {
        formMessage.textContent = "Form submitted successfully!";
        formMessage.style.color = "green";
    }

    console.log("Form Submitted: ", name, email); // Debugging log
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

var imgs = document.querySelectorAll('.slider img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0; // index of the first image 
const interval = 5000; // duration(speed) of the slide

function changeSlide(n) {
  for (var i = 0; i < imgs.length; i++) { // reset
    imgs[i].style.opacity = 0;
    dots[i].className = dots[i].className.replace(' active', '');
  }

  currentImg = (currentImg + 1) % imgs.length; // update the index number

if (n != undefined) {
    clearInterval(timer);
    timer = setInterval(changeSlide, interval);
    currentImg = n;
}

  imgs[currentImg].style.opacity = 1;
  dots[currentImg].className += ' active';


}
var timer = setInterval(changeSlide, interval);

