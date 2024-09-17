document.addEventListener("DOMContentLoaded" ,init)

function init() {
   const contactForn = document.querySelector("#send_contacts");
   const contactus = document.querySelector(".contactus");
   const showContactForm = document.querySelector("#fixed_form");
   const close_form = document.querySelector(".close_form");
   const main_icon = document.querySelector(".main_icon");
   const shooBurgerMenu = document.querySelector("#logo .cell:nth-child(2)");
   const span1 = document.querySelector(".burger_menu .icon1");
   const span2 = document.querySelector(".burger_menu .icon3");
   const span3 = document.querySelector(".burger_menu .hide_icon");
   const span = document.querySelectorAll(".burger_menu span")
    
   contactForn.addEventListener("submit",function(event) {
    event.preventDefault();
   }) 

   contactus.addEventListener("click", function() {
    showContactForm.classList.add("show_contact")
    showContactForm.classList.remove("hide_contact")
   })
   close_form.addEventListener("click", function() {
    showContactForm.classList.add("hide_contact")
    showContactForm.classList.remove("show_contact")
   })

   main_icon.addEventListener("click", function() {
    span.forEach(elem => {
        elem.classList.toggle("icon_menu_color");
    })
    shooBurgerMenu.classList.toggle("show_burger_menu");
    span1.classList.toggle("rotate_icon1");
    span2.classList.toggle("rotate_icon3");
    span3.classList.toggle("hide_icons");
   })
}