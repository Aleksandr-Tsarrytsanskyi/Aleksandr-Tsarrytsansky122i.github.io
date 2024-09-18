document.addEventListener("DOMContentLoaded", function() {
    const link1 = document.querySelector("#link1")
    const link2 = document.querySelector("#link2")
    const link3 = document.querySelector("#link3")
    const link4 = document.querySelector("#link4")
    const link5 = document.querySelector("#link5")
    const link6 = document.querySelector("#link6")
    const link7 = document.querySelector("#link7")
    const link8 = document.querySelector("#link8")
    const link9 = document.querySelector("#link9")
    const link10 = document.querySelector("#link10")
    const link11 = document.querySelector("#link11")
    const structures = document.querySelector("#structures")
    const hide_item = document.querySelectorAll("#solutions .hide_item ")
    const links = document.querySelectorAll("#solutions a ")
    const Government = document.querySelector("#Government")
    const agencies = document.querySelector("#agencies")
    const industry = document.querySelector("#industry")
    const Healthcare = document.querySelector("#Healthcare")
    const Education = document.querySelector("#Education")
    const Financial = document.querySelector("#Financial")
    const Telecommunications = document.querySelector("#Telecommunications")
    const services_center = document.querySelector("#Telecommunications")
    const Corporate = document.querySelector("#Corporate")
    const business = document.querySelector("#business")
    const Sector = document.querySelector("#Sector")
    console.log(hide_item);
    
    links.forEach(elem => {
        elem.addEventListener("click",function(e) {
            e.preventDefault();
        })
    })
    link1.addEventListener("click", function() {
        structures.classList.add("hide_structures")
        Government.classList.toggle("hide_links")
        hide_item.forEach(elem => {
            elem.style.display = "none";
        })
    })
    
    link2.addEventListener("click", function() {
        agencies.classList.toggle("hide_links")
        hide_item.forEach(elem => {
            elem.style.display = "none";
        })
       
    })

    link3.addEventListener("click", function() {
        industry.classList.toggle("hide_links")
        
       
    })

    link4.addEventListener("click", function() {
        Healthcare.classList.toggle("hide_links")
        
       
    })

    link5.addEventListener("click", function() {
        Education.classList.toggle("hide_links")
    })

    link6.addEventListener("click", function() {
        Financial.classList.toggle("hide_links")
    })
    link7.addEventListener("click", function() {
        Corporate.classList.toggle("hide_links")
    })
    link8.addEventListener("click", function() {
        Telecommunications.classList.toggle("hide_links")
    })
    link9.addEventListener("click", function() {
        services_center.classList.toggle("hide_links")
    })
    link10.addEventListener("click", function() {
        business.classList.toggle("hide_links")
    })
    link11.addEventListener("click", function() {
        Sector.classList.toggle("hide_links")
    })
})