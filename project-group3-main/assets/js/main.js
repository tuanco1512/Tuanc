let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}

$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("changeb");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("changeb");
        }
    });
});