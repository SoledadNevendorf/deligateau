/* tooltips */
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

/* return to top */
var backToTopButton = document.getElementById("return-to-top");

// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function() {
if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    backToTopButton.style.display = "block";
} else {
    backToTopButton.style.display = "none";
}
};

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}

/* form */

$(function() {
    // Manejar la presentación del modal de agradecimiento después de enviar el formulario
    $('#contact-form').submit(function(event) {
        event.preventDefault();
        $('#thank-you-modal').modal('show');
    });
});