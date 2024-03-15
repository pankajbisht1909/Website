(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();
    //email
    document.getElementById('bookNowBtn').addEventListener('click', function(event) {
        // Retrieve form values
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var datetime = document.getElementById('datetime').value;
        var destination = document.getElementById('destination').value;
        var number = document.getElementById('number').value;
        var message = document.getElementById('message').value;

        // Perform validation
        if (name.trim() === '' || destination.trim() === '' || number.trim() === '') {
            alert('Name, Destination, and Number fields cannot be empty');
            event.preventDefault();
            return; // Prevent further execution if validation fails
        }

        // Construct email body
        var body = "Name: " + name + "\n" +
                   "Email: " + email + "\n" +
                   "Date & Time: " + datetime + "\n" +
                   "Destination: " + destination + "\n" +
                   "Your Number: " + number + "\n" +
                   "Special Request: " + message;

        // Create mailto link with pre-filled details
        var mailtoLink = "mailto:triyambikatours@gmail.com?subject=Booking Request&body=" + encodeURIComponent(body);

        // Open mail client
        window.open(mailtoLink);
    });
     

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    //package carousel
    $(".packages-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);


document.addEventListener("DOMContentLoaded", function() {
    const sidebarLinks = document.querySelectorAll(".sidebar-link");
    const contentSections = document.querySelectorAll(".content-section");

    sidebarLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            const targetId = link.getAttribute("data-target");

            contentSections.forEach(function(section) {
                if (section.id === targetId) {
                    section.style.display = "block";
                } else {
                    section.style.display = "none";
                }
            });
        });
    });
});




function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("filterDiv");
    if (c == "all") {
        c = "";
    }
    for (i = 0; i < x.length; i++) {
        if (x[i].className.indexOf(c) > -1) {
            x[i].style.display = "block";
        } else {
            x[i].style.display = "none";
        }
    }
}

// Show all Kumaun tours
document.querySelector("#myBtnContainer .btn:nth-child(2)").addEventListener("click", function() {
    filterSelection('kumaun');
});

// Show all Pilgrimage tours
document.querySelector("#myBtnContainer .btn:nth-child(4)").addEventListener("click", function() {
    filterSelection('pilgrimage');
});
//Show all wildlife package
document.querySelector("#myBtnContainer .btn:nth-child(5)").addEventListener("click", function() {
    filterSelection('wildlife');
});
document.querySelector("#myBtnContainer .btn:nth-child(3)").addEventListener("click", function() {
    filterSelection('local');
});
document.querySelector("#myBtnContainer .btn:nth-child(6)").addEventListener("click", function() {
    filterSelection('educational');
});

function myFunction(num) {
    var dots = document.getElementById("dots" + num);
    var moreText = document.getElementById("more" + num);
    var moreContent = document.getElementById("moreContent" + num);
    var btnText = document.getElementById("myBtn" + num);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
        moreContent.style.display = "none"; // hide the link button
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
        moreContent.style.display = "block"; // show the link button
    }
}

