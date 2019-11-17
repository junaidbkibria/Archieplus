$(document).ready(function(){
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
$(".notVisible").hide();
$(".s1,.s2,.s3,.s4,.s5,.s6,.s7,.s8").hide();



$(".m").hide();
// project begins
$(".pb,.view1,.view2").click(function(){
    $(".visible").hide(1000);
    $(".pb").hide();
    $(".notVisible").show();
});
$(".backward").click(function(){
    $(".notVisible").hide(1000);
    $(".pb").show();
    $(".visible").show(1000);
});
// project ends
// blog starts
$(".blogInvisible").hide();
// view all blog button
$(".bb").click(function(){
    $(".blogVisible").hide(1000);
    $(".blogInvisible").show();

    $(".a1").show(200);
    $(".s1").hide(200);
    $(".m1").hide();

    $(".a2").show(200);
    $(".s2").hide(200);
    $(".m2").hide();
});
// view all blog button ends
// blog backward button
$(".backward2").click(function(){
    $(".blogInvisible").hide(1000);
    $(".bb").show();
    $(".blogVisible").show(1000);

    $(".a3").show(200);
    $(".s3").hide(200);
    $(".m3").hide();

    $(".a4").show(200);
    $(".s4").hide(200);
    $(".m4").hide();

    $(".a5").show(200);
    $(".s5").hide(200);
    $(".m5").hide();

    $(".a6").show(200);
    $(".s6").hide(200);
    $(".m6").hide();

    $(".a7").show(200);
    $(".s7").hide(200);
    $(".m7").hide();

    $(".a8").show(200);
    $(".s8").hide(200);
    $(".m8").hide();
});
// blog backward button ends

// blog 1 starts
$(".a1").click(function(){
    $(".a1").hide(200);
    $(".s1").show(200);
    $(".m1").show();
});
$(".m1").click(function(){
    $(".a1").show(200);
    $(".s1").hide(200);
    $(".m1").hide();
});
// blog1 ends
// blog 2 starts
$(".a2").click(function(){
    $(".a2").hide(200);
    $(".s2").show(200);
    $(".m2").show();
});
$(".m2").click(function(){
    $(".a2").show(200);
    $(".s2").hide(200);
    $(".m2").hide();
});
// blog2 ends
// blog 3 starts
$(".a3").click(function(){
    $(".a3").hide(200);
    $(".s3").show(200);
    $(".m3").show();
});
$(".m3").click(function(){
    $(".a3").show(200);
    $(".s3").hide(200);
    $(".m3").hide();
});
// blog3 ends
// blog 4 starts
$(".a4").click(function(){
    $(".a4").hide(200);
    $(".s4").show(200);
    $(".m4").show();
});
$(".m4").click(function(){
    $(".a4").show(200);
    $(".s4").hide(200);
    $(".m4").hide();
});
// blog4 ends
// blog 5 starts
$(".a5").click(function(){
    $(".a5").hide(200);
    $(".s5").show(200);
    $(".m5").show();
});
$(".m5").click(function(){
    $(".a5").show(200);
    $(".s5").hide(200);
    $(".m5").hide();
});
// blog5 ends
// blog 6 starts
$(".a6").click(function(){
    $(".a6").hide(200);
    $(".s6").show(200);
    $(".m6").show();
});
$(".m6").click(function(){
    $(".a6").show(200);
    $(".s6").hide(200);
    $(".m6").hide();
});
// blog6 ends
// blog 7 starts
$(".a7").click(function(){
    $(".a7").hide(200);
    $(".s7").show(200);
    $(".m7").show();
});
$(".m7").click(function(){
    $(".a7").show(200);
    $(".s7").hide(200);
    $(".m7").hide();
});
// blog7 ends
// blog 8 starts
$(".a8").click(function(){
    $(".a8").hide(200);
    $(".s8").show(200);
    $(".m8").show();
});
$(".m8").click(function(){
    $(".a8").show(200);
    $(".s8").hide(200);
    $(".m8").hide();
});
// blog8 ends
// blog ends
});
