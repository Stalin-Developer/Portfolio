/* ----- NAVIGATION BAR FUNCTION ----- */
var menuBtn = document.getElementById("myNavMenu");
function myMenuFunction(){
  

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}


/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}




/* ----- CLOSE MOBILE MENU AFTER DOES CLICK ON A LINK. ----- */
/*We create a button to redirect into each link. */
var links = document.getElementsByClassName('nav_list');

/**Close the mobie menu with the links.
 * With the getElementsByClassName we recieve an array of elements. We cannot to use an evet listener
 * for all those elements at once. So, we have to iterate them to apply an event listener to each one.
*/

//Iterate each element and add an event listener.
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      //Inside the else, the mobile menu is open.
      //Here it creates a property delay.
      menuBtn.style.transitionDelay = "0.7s";

      menuBtn.className = "nav-menu";


      /*After certain time it will remove the style, because we don't want to affect the function of the 
      menu button.*/
      setTimeout(function() {
        menuBtn.style.transitionDelay = "0s";
      }, 800);

      
    }

  });
}







/* ----- LOGO CLICK EVENT ----- */
/**Logo click event. */
let logo= document.getElementById("logo");

/**We scroll to the beginning when the user does click on the logo. */
logo.addEventListener("click", function () {
    /**The scrollTo has two params, scroll in x, and scroll in y. */
    window.scrollTo(0, 0);
});





/**Copyright year dynamically. */
// Obtain the current year.
let currentYear = new Date().getFullYear();

//Insert the current year in the copyrightBar.
document.getElementById('year-placeholder').textContent = currentYear;
















































/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
  strings : ["Developer", "Designer"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 3000
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})






/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
const scrollY = window.scrollY;

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
    
  }  else {
    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')    

  }
})
}

/**Event type scroll. */
window.addEventListener('scroll', scrollActive)






/* ----- EXCLUDE LANGUAGE SELECTOR OF THE AUTOMATIC SCROLL. ----- */
document.getElementById("google_translate_element").addEventListener("click", (event) => {
  //Avoid the defualt behaviour of the button (don't do scroll).
  event.preventDefault();

  //We make it deaf.
  window.removeEventListener('scroll', scrollActive);
  
  //We make it listen again after a moment.
  setTimeout(() => {
    window.addEventListener('scroll', scrollActive);
  }, 2000);

});