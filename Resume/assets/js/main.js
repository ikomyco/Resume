// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("mvtop").style.display = "block";
    } else {
        document.getElementById("mvtop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {

    // document.body.scrollTop =0; // For Safari
    // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

		$(window).scroll(function() {
			var height = $(window).scrollTop();
			if (height > 100) {
			$('#mvtop').fadeIn();
			} else {
			$('#mvtop').fadeOut();
		}
		});
		$(document).ready(function() {
		$("#mvtop").click(function(event) {
			event.preventDefault();
			$("html, body").animate({ scrollTop: 0 }, "slow");
			return false;
		});

		});
}