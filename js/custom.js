$(window).scroll(function() {    

    var scroll = $(window).scrollTop();

    if (scroll >= 77) {

        //clearHeader, not clearheader - caps H

        $("header").addClass("scrollHeader");

    }else{

        $("header").removeClass("scrollHeader");

    }

});

// $("#services").owlCarousel({

//         navigation : true,

//         nav: false,

//         dots: false,

//         center: false,

//         loop: true,

//         margin: 15,

//         autoplay: 900,

//         autoPlaySpeed: 900,

//         autoPlayTimeout: 900,

//         autoplayHoverPause: false,



       

//         responsive : {

         

//             1280 : {items:4},

//             0 : {items:4},                

//             991 : {items:2},

//             767 : {items:2},

//             576 : {items:2},

//             480 : {items:1},

//             360 : {items:1},

//             320 : {items:1}

//         }

//       });
$(document).ready(function(){

    $(".thump li a").click(function(e){

        e.preventDefault();

        var target = $(this).attr("href");

        console.log(target);

        $(".thump li a").removeClass("active");

        $(this).addClass("active");

        $(".tes-decp div").hide();

        $(target).fadeIn();

    })

});

$('.nav-link').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});


$(".more").click(function(){
    $(".more_paragraph").show(); 
    $(this).hide();   
});