$(document).ready(function(){
    $('.menu-list ul li a').click(function() {
        $('.menu-list li a').removeClass("active");
        $(this).addClass("active");  
    });
});

function myFunction(x) {
    x.classList.toggle("change");
    if (document.getElementById("menu").style.display === "block") {
        document.getElementById("menu").style.display = "none";
        
    } else {
        document.getElementById("menu").style.display = "block";
    }
  
    if (document.getElementById("menu").style.width === "100%") {
        document.getElementById("menu").style.width = "0";
        
        
    } else {
        document.getElementById("menu").style.width = "100%";
    }
  }