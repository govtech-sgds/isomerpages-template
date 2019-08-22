$(document).ready(function() {
    var masthead_container = $(".masthead-container");
    var searchToggle = $("#search-activate");
    var searchIcon = $("#search-activate span");
    var searchBar = $(".search-bar");
    var searchBar_input = $(".search-bar input");
    searchToggle.on("click", function(e) {
        e.preventDefault();
        searchIcon.toggleClass("sgds-icon-search").toggleClass("sgds-icon-cross");
        searchBar.toggleClass("hide");
        searchBar_input.focus().val("");
        masthead_container.toggleClass("is-opened");
    });
    // Custom dropdown code for mobile browsers
    const dropdowns = document.querySelectorAll(".mobile-nav-dropdown");
    if (dropdowns.length > 0) {
        dropdowns.forEach(dropdown => {
            const [dropdownMenu] = dropdown.getElementsByClassName("sgds-dropdown-menu");
            const [dropdownTrigger] = dropdown.getElementsByClassName("sgds-dropdown-button");
            if (dropdownMenu && dropdownTrigger) {
                dropdownTrigger.onclick = () => {
                    let dropdownIcon = dropdownTrigger.querySelector(".sgds-icon");
                    if (
                        dropdownMenu.style.display === "" ||
                        dropdownMenu.style.display === "none"
                    ) {
                        dropdownMenu.style.display = "block";

                        dropdownIcon.classList.remove("sgds-icon-chevron-down");
                        dropdownIcon.classList.add("sgds-icon-chevron-up");
                    } else {
                        dropdownMenu.style.display = "";

                        dropdownIcon.classList.remove("sgds-icon-chevron-up");
                        dropdownIcon.classList.add("sgds-icon-chevron-down");
                    }
                };
                document.addEventListener("click", evt => {
                    let targetElement = evt.target; // clicked element
                    if (dropdown.contains(targetElement)) {
                        return;
                    }
                    dropdownMenu.style.display = "";
                });
            }
        });
    }

    // Wrap all tables in a <div> with the horizontal-scroll class so that the
    // table will not be cut off on mobile
    $("table").wrap('<div class="horizontal-scroll"></div>');
});
