if (localStorage.getItem("currentPage") === null) {
    localStorage.setItem("currentPage", "#homePage"); // set local storage if not already done
}

$(document).ready(function () {

    $(localStorage.getItem("currentPage")).show(); // default page
});

function switchPage(id) {
    let active = localStorage.getItem("currentPage"); // retrieve current page
    if (active !== id) { // No action if requested id is active
        $(active).hide(function () { // hide current table
            $(id).show(function () { // show requested table
                localStorage.setItem("currentPage", id); // make requested Page active
            });
        });
    }
}