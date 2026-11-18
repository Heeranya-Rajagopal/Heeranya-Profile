
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

// Theme Switcher
const themeButtons = document.querySelectorAll(".theme-btn");

const allowedThemes = ["default", "dark", "ocean"];

const savedTheme = localStorage.getItem("selectedTheme");

const activeTheme = allowedThemes.includes(savedTheme)
    ? savedTheme
    : "default";

function applyTheme(theme) {

    if (!allowedThemes.includes(theme)) return;

    if (theme === "default") {
        document.documentElement.removeAttribute("data-theme");
    } else {
        document.documentElement.setAttribute("data-theme", theme);
    }

    themeButtons.forEach(function (button) {
        button.classList.toggle(
            "active",
            button.dataset.theme === theme
        );
    });

    localStorage.setItem("selectedTheme", theme);
}

// Apply saved theme
applyTheme(activeTheme);

// Handle button clicks
themeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        applyTheme(this.dataset.theme);
    });
});