document.addEventListener("DOMContentLoaded", function (){
    const button = document.getElementById("button-img");
    const button2 = document.getElementById("button35")
    button.addEventListener("click", function (){
        window.location.href = "Page2.html";
    })

    button2.addEventListener("click", function(){
        window.location.href="Page1.html";
    })
})