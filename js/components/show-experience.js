
$(document).ready(function() {
    $('a[href = "#show_GE"]').click(function(){
        if (document.getElementById("GE_link").innerHTML == "Learn More"){
            document.getElementById("GE_info").innerHTML = "</br>From May 2017 until July 2017 I worked as a software " +
            "engineering intern within the Edison program at GE Healthcare.</br> I worked as a part of the CT image reconstruction "+
            "team and my project was focused on optimizing the software build system.  The previous build system was taking more than 5 hours to compile their code.  " +
            "In order to improve efficiency, I created a containerized and automated build environment using two open source projects: "+
            "Jenkins and Docker. " +
            "I was in charge of scripting the pipeline in Jenkins using Groovy and JSON files obtained from source code management.  In "+
            "addition, I needed to create and prepare the Docker container environment with the various third party dependencies required "+
            "for source code compilation.  I also prepared Makefiles to create source code rpm packages for easy integration into the new build environment.  "+
            "This new build environment is able to compile code 5x faster than the previous system.</br>";
            document.getElementById("GE_link").innerHTML = "Hide";
            document.getElementById("GE_service").style.height = "700px";
            $('#GE_service-element').removeClass('service-element');
            $('#GE_service-info').removeClass('service-info');
            $('html, body').animate({ scrollTop:  $('#GE_service-element').offset().top - 35 }, 600);
        } else {
            document.getElementById("GE_info").innerHTML = "";
            document.getElementById("GE_link").innerHTML = "Learn More";
            document.getElementById("GE_service").style.height = "";
            $('#GE_service-element').addClass('service-element');
            $('#GE_service-info').addClass('service-info');
            $('html, body').animate({ scrollTop:  $('#GE_service-element').offset().top - 200 }, 600);

        }

    }); 
});

$(document).ready(function() {
    $('a[href = "#show_FAST"]').click(function(){
        if (document.getElementById("FAST_link").innerHTML == "Learn More"){
            document.getElementById("FAST_info").innerHTML = "</br>From May 2016 until July 2016 I worked as a software " +
            "implementation consultant intern at Fast Enterprises.</br>As an implementation consultant, I needed to " +
            "communicate with non-technical consumers to identify errors or additional desired functionality. " +
            " I would discuss potential solutions with these clients and then implement the fixes or updates in the sofware. </br>" +
            "In addition to the consultant role, the site I was working on was preparing for a major software upgrade. "+
            "To help prepare for that upgrade, I analyzed the current code and the updated code in order to pinpoint potential conflicts " +
            " within the upgrade process.";
            document.getElementById("FAST_link").innerHTML = "Hide";
            document.getElementById("FAST_service").style.height = "700px";
            $('#FAST_service-element').removeClass('service-element');
            $('#FAST_service-info').removeClass('service-info');
            $('html, body').animate({ scrollTop:  $('#FAST_service-element').offset().top - 35 }, 600);
        } else {
            document.getElementById("FAST_info").innerHTML = "";
            document.getElementById("FAST_link").innerHTML = "Learn More";
            document.getElementById("FAST_service").style.height = "";
            $('#FAST_service-element').addClass('service-element');
            $('#FAST_service-info').addClass('service-info');
            $('html, body').animate({ scrollTop:  $('#FAST_service-element').offset().top - 200 }, 600);
        }

    }); 
});

$(document).ready(function() {
    $('a[href = "#show_KHRI"]').click(function(){
        if (document.getElementById("KHRI_link").innerHTML == "Learn More"){
            document.getElementById("KHRI_info").innerHTML = "</br>I have worked as a laboratory research assistant at "+
            "the Kresge Hearing Research Institute since January of 2010.</br>I have been involved in a wide variety of projects "+
            "ranging from language aquisition to experimental stem-cell surgeries. "+
            "In the lab, I have gained experience with complex data analysis and biological research practices including auditory brainstem response processing, cell quantification, DNA processing, dissection techniques, and surgical techniques. "+
            "In addition, I have had the opportunity to prepare scientific manuscripts and present at high-level research conferences and symposiums." +
            "</br>For more information on my research experience, please visit the research section of this webpage.";
            document.getElementById("KHRI_link").innerHTML = "Hide";
            document.getElementById("KHRI_service").style.height = "700px";
            $('#KHRI_service-element').removeClass('service-element');
            $('#KHRI_service-info').removeClass('service-info');
            $('html, body').animate({ scrollTop:  $('#KHRI_service-element').offset().top - 35 }, 600);
        } else {
            document.getElementById("KHRI_info").innerHTML = "";
            document.getElementById("KHRI_link").innerHTML = "Learn More";
            document.getElementById("KHRI_service").style.height = "";
            $('#KHRI_service-element').addClass('service-element');
            $('#KHRI_service-info').addClass('service-info');
            $('html, body').animate({ scrollTop:  $('#KHRI_service-element').offset().top - 200 }, 600);
        }

    }); 
});
