
$(document).ready(function() {
    $('a[href = "#show_GE"]').click(function(){
        if (document.getElementById("GE_link").innerHTML == "Learn More"){
            document.getElementById("GE_info").innerHTML = "</br>From May 2017 until July 2017 I worked as a software " +
            "engineering intern at GE Healthcare.</br> My project focused on optimizing the software build system.  The previous build system was taking more than 5 hours to compile their code.  " +
            "In order to improve efficiency, I created a containerized and automated build environment using "+
            "Jenkins and Docker. " +
            "I scripted the pipeline in Jenkins using Groovy and JSON files obtained from source code management.  In "+
            "addition, I created the Docker container environment with all of the dependencies needed "+
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
            document.getElementById("FAST_info").innerHTML = "</br>From May 2018 until February 2019 I worked as a software " +
            "implementation consultant at Fast Enterprises.</br>As an implementation consultant, I needed to " +
            "communicate with non-technical consumers to identify errors or additional desired functionality. " +
            " I would discuss potential solutions with these clients and then implement the fixes or updates in the sofware. </br>" +
            "I worked on an interface for law enforcement to interact with the vehicle records for the entire state of Oregon. I wrote complex SQL queries to create reports for law enforcement and the DMV records department in a production database with tens of millions of records. </br>In addition to the consultant role, I wrote an automated testing script to ensure functionality of the most critical feature of the software product (the title and registration functionality for the DMV for the state of Oregon). I used this to identify multiple mission critical bugs related to concurrent processing and high volume.";
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
            "the Kresge Hearing Research Institute from January 2010 until January 2018.</br>I have been involved in a wide variety of projects "+
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

