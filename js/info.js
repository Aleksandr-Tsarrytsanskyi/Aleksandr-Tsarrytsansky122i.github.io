document.addEventListener("DOMContentLoaded", function() {
    const changeBlockInfo = document.querySelector("#change_block_info");
    const changeBlockMore = document.querySelector("#change_block_more");
    const nav = document.querySelectorAll("#nav");
    const info = document.querySelector("#info");
    const moreInformation = document.querySelector("#more_information");
    const link_rewiu = document.querySelector("#link_rewiu");
    const product_reviews = document.querySelector("#show_product_reviews");
   
   
    link_rewiu.addEventListener("click", function() {
        moreInformation.hidden = true
        info.hidden = true
        if( product_reviews.hidden = true) {
         product_reviews.hidden = false
        }
        else {
            product_reviews.hidden = false
         
        }
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