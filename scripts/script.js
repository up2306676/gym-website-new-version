
//function to togle the hamburger menu
document.addEventListener("DOMContentLoaded", function () { 
    function toggleHamburgerMenu(){ //wrap the hamburger meue toggle in a finction to make it reusable
        let nav_menu = document.querySelector(".nav-menu"); // assign the mav-menu class to a variable
        let nav_container = document.querySelector(".navigation-container") //assign navigation-container class to a variable
        let hamburger_menu = document.querySelector(".hamburger"); // assign the hamburger class to a variable
        nav_menu.classList.toggle("show-nav"); // show the menu
        hamburger_menu.classList.toggle("show-nav"); //allow for the transformation of the hambirger menu 
        nav_container.classList.toggle("show-nav");//allow for the nav container trnsformation
        
    }
    document.querySelector(".hamburger").addEventListener("click",toggleHamburgerMenu); // call the function   
});
