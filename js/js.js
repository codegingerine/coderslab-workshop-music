document.addEventListener("DOMContentLoaded", function() { 

/* ===== NavBar section ===== */

    /* Navbar section
    - Expand dropdown-menu on mobile screens by toggling Bootstrap 'dropdown-menu' class
    - Remove dropdown arrow on mobile screens by toggling Bootstrap 'dropdown-toggle' class 
    */
    var navbarToggle = document.querySelector(".navbar-main .navbar-toggler");
    var dropdownMenu = document.querySelector(".navbar-main .nav.navbar-nav .dropdown-menu");
    var arrow = document.querySelector(".navbar-main .nav.navbar-nav .dropdown-toggle");
    
    function DropdownMobile() {
        if (window.matchMedia("screen and (max-width: 767px)").matches) {
            navbarToggle.addEventListener("click", function(event) {
                dropdownMenu.classList.toggle("dropdown-menu");
                arrow.classList.toggle("dropdown-toggle");
            });
        };
     };  
    DropdownMobile()     



// if (window.matchMedia("(min-width: 768px)").matches) {
//     $(function(){
//         $('.boxes .box-wrap img').hover(
//           function() {
//             $(this).attr('src', $(this).attr('data-anime'));
//           }, function() {
//             $(this).attr('src', $(this).attr('data-static'));
//           }
//         );
//     });
// };



    

    /* Boxes section
    - remove opacity on mouseover, change font color
    - add opacity on mouseout, change font color
    */
    var boxWrap = document.querySelectorAll(".boxes .box-wrap")
    var boxIMG = document.querySelectorAll(".boxes .box-wrap img")

    function BoxesOpacity() {
        // if (window.matchMedia("screen and (min-width: 768px)").matches) {
            for (var i=0; i<boxWrap.length; i++) {
                boxWrap[i].addEventListener("mouseover", function(event) {
                    this.firstElementChild.firstElementChild.classList.remove("opacity");
                    this.firstElementChild.firstElementChild.nextElementSibling.classList.remove("box-font-anime");
                });
                boxWrap[i].addEventListener("mouseout", function(event) {
                    this.firstElementChild.firstElementChild.classList.add("opacity");
                    this.firstElementChild.firstElementChild.nextElementSibling.classList.add("box-font-anime");                    
                });
            };
        // };
     };  
    BoxesOpacity()   

});
