document.addEventListener("DOMContentLoaded", function () {

    // All of my code goes in here //

    const flkty = new Flickity('.main-carousel', {
        cellAlign: 'left',
        wrapAround: true,
        freeScroll: true
    });

    const form = document.getElementById("form");
    const email = document.getElementById("email");

    form.addEventListener("submit", function (popUp) {
        popUp.preventDefault();
        if (email.value != "") {
            alert("Thank you for subscribing!");
            form.submit();
        }
        else {
            alert("Please enter a valid email")
        }
    });


});  // End of my code//

