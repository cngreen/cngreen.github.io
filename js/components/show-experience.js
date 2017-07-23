// Created by: kari3545: 
// Progress Bar
// var ProgressBar = function() {
//     "use strict";

//     // Handle Progress Bar Horizontal
//     var handleProgressBars = function() {
//         $(document).ready(function() {
//             $('.progress').each(function() {
//                 $(this).appear(function() {
//                     $(this).animate({
//                         opacity: 1,
//                         left: "0px"
//                     }, 800);
//                     var w = $(this).find(".progress-bar").attr("data-width");
//                     var h = $(this).find(".progress-bar").attr("data-height");
//                     $(this).find(".progress-bar").animate({
//                         width: w + "%",
//                         height: h + "%"
//                     }, 100, "linear");
//                 });
//             });
//         });
//     }

//     return {
//         init: function() {
//             handleProgressBars(); // initial setup for progressbars
//         }
//     }
// }();

$(document).ready(function() {
    $('a[href = "#show_GE"]').click(function(){
        if (document.getElementById("GE_link").innerHTML == "Learn More"){
            document.getElementById("GE_info").innerHTML = "</br>From May 2017 until July 2017 I worked as a software " +
            "engineering intern at GE Healthcare.</br>I worked on optimizing the build system for the CT image " +
            "reconstruction team.  The current build system was taking more than 5 hours to compile their code.  " +
            "Using Jenkins and Docker, I was able to create a containerized and automated build environment.  " +
            "This new build environment was able to compile code 5x faster than the previous system.</br>";
            document.getElementById("GE_link").innerHTML = "Hide";
            document.getElementById("GE_service").style.height = "450px";
            $('#GE_service-element').removeClass('service-element');
            $('#GE_service-info').removeClass('service-info');
        } else {
            document.getElementById("GE_info").innerHTML = "";
            document.getElementById("GE_link").innerHTML = "Learn More";
            document.getElementById("GE_service").style.height = "";
            $('#GE_service-element').addClass('service-element');
            $('#GE_service-info').addClass('service-info');
        }

    }); 
});

$(document).ready(function() {
    $('a[href = "#show_FAST"]').click(function(){
        if (document.getElementById("FAST_link").innerHTML == "Learn More"){
            document.getElementById("FAST_info").innerHTML = "</br>From May 2017 until July 2017 I worked as a software " +
            "implementation consultant intern at Fast Enterprises.";
            document.getElementById("FAST_link").innerHTML = "Hide";
            document.getElementById("FAST_service").style.height = "450px";
            $('#FAST_service-element').removeClass('service-element');
            $('#FAST_service-info').removeClass('service-info');
        } else {
            document.getElementById("FAST_info").innerHTML = "";
            document.getElementById("FAST_link").innerHTML = "Learn More";
            document.getElementById("FAST_service").style.height = "";
            $('#FAST_service-element').addClass('service-element');
            $('#FAST_service-info').addClass('service-info');
        }

    }); 
});

$(document).ready(function() {
    $('a[href = "#show_KHRI"]').click(function(){
        if (document.getElementById("KHRI_link").innerHTML == "Learn More"){
            document.getElementById("KHRI_info").innerHTML = "</br>From May 2017 until July 2017 I worked as a software " +
            "implementation consultant intern at Fast Enterprises.";
            document.getElementById("KHRI_link").innerHTML = "Hide";
            document.getElementById("KHRI_service").style.height = "450px";
            $('#KHRI_service-element').removeClass('service-element');
            $('#KHRI_service-info').removeClass('service-info');
        } else {
            document.getElementById("KHRI_info").innerHTML = "";
            document.getElementById("KHRI_link").innerHTML = "Learn More";
            document.getElementById("KHRI_service").style.height = "";
            $('#KHRI_service-element').addClass('service-element');
            $('#KHRI_service-info').addClass('service-info');
        }

    }); 
});
