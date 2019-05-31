let test = document.querySelector(".about");

test.addEventListener("mouseenter", function (event) {

    event.target.style.color = "#6EBDDB";

    // setTimeout(function () {
    //     event.target.style.color = "";
    // }, 500);
}, false);

test.addEventListener("mouseover", function (event) {

    event.target.style.color = "white";

    setTimeout(function () {
        event.target.style.color = "";
    }, 1000);
}, false);

// ////////////////////////////////////////