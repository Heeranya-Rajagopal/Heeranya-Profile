// Automatically update copyright year
const currentYear = document.getElementById("current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// Back to Top Button
const backToTop = document.getElementById("back-to-top");

if (backToTop) {
    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


// Theme Selector
const themeSelector = document.getElementById("theme-selector");

const allowedThemes = ["default", "dark", "pastel"];
const savedTheme = localStorage.getItem("selectedTheme");

const activeTheme = allowedThemes.includes(savedTheme)
    ? savedTheme
    : "default";

// Apply the saved theme when the website loads
if (activeTheme === "default") {
    document.documentElement.removeAttribute("data-theme");
} else {
    document.documentElement.setAttribute("data-theme", activeTheme);
}

// Change theme when the visitor selects an option
if (themeSelector) {
    themeSelector.value = activeTheme;

    themeSelector.addEventListener("change", function () {
        const selectedTheme = this.value;

        if (selectedTheme === "default") {
            document.documentElement.removeAttribute("data-theme");
        } else {
            document.documentElement.setAttribute("data-theme", selectedTheme);
        }

        // Remember the selected theme
        localStorage.setItem("selectedTheme", selectedTheme);
    });
}