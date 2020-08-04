
//mixitup

$(document).ready(function(){
    var mixer=mixitup('.container');
});


//sticky menu
$(".js--aboutme-section").waypoint(function (direction) {
    if (direction == "down") {
        $("nav").addClass("sticky");
    } else {
        $("nav").removeClass("sticky");

    }
});
//mobile menu

function openNav() {
    document.getElementById("myNav").style.width="100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}



//active menu
$(document).on('click', 'ul li', function(){
    $(this).addClass('active').siblings().removeClass('active')
})