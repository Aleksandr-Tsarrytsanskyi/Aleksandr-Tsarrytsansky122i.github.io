document.addEventListener("DOMContentLoaded", function() {
    const changeBlockInfo = document.querySelector("#change_block_info");
    const changeBlockMore = document.querySelector("#change_block_more");
    const nav = document.querySelectorAll("#nav");
    const info = document.querySelector("#info");
    const moreInformation = document.querySelector("#more_information");
    const link_rewiu = document.querySelector("#link_rewiu");
    const product_reviews = document.querySelector("#show_product_reviews");
    const reviews = document.querySelector("#clearreviews");
    const contact_us = document.querySelector("#more_details .contact_us");
   
   
    contact_us.addEventListener("click", function() {
        showContactForm.classList.add("show_contact")
        showContactForm.classList.remove("hide_contact")
        burger_menu.hidden = true;
       })
 
    nav.forEach(elem => {
     elem.addEventListener("click",function(e) {
         e.preventDefault()
     })
    })
    changeBlockInfo.addEventListener("click",function() {
     info.classList.add("hide_info");
     info.classList.remove("show_info");
     moreInformation.classList.add("show_info");
    })
 
    changeBlockMore.addEventListener("click",function() {
     info.classList.add("show_info");
     info.classList.remove("hide_info");
     moreInformation.classList.remove("hide_info");
     moreInformation.classList.remove("show_info");
    })
})