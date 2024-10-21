document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const darkModeDropdown = document.getElementById("darkModeDropdown");
    const darkModeText = document.getElementById("darkModeText");
    const themeIcon = document.getElementById("themeIcon");
    const chevronIcon = document.getElementById("chevronIcon");
  
    // Element references for dropdown options
    const lightOption = document.getElementById("light");
    const darkOption = document.getElementById("dark");
    const autoOption = document.getElementById("auto");
  
    // Terjemahan teks untuk setiap mode dalam dua bahasa
    const translations = {
        id: {
            light: 'Terang',
            dark: 'Gelap',
            auto: 'Auto'
        },
        en: {
            light: 'Light',
            dark: 'Dark',
            auto: 'Auto'
        }
    };
  
    // Function to update the button text, theme icon, and active state
    function updateToggleTextAndIcon(theme) {
        const language = localStorage.getItem('language') || 'id'; // Ambil bahasa dari localStorage atau default ke 'id'
  
        // Reset active state for all options
        lightOption.classList.remove("text-primary", "font-bold");
        darkOption.classList.remove("text-primary", "font-bold");
        autoOption.classList.remove("text-primary", "font-bold");
  
        if (theme === "dark") {
            darkModeText.textContent = translations[language].dark;
            themeIcon.className = "bi bi-moon-stars-fill ml-2";
            darkOption.classList.add("text-primary", "font-bold");
        } else if (theme === "light") {
            darkModeText.textContent = translations[language].light;
            themeIcon.className = "bi bi-sun-fill ml-2";
            lightOption.classList.add("text-primary", "font-bold");
        } else {
            darkModeText.textContent = translations[language].auto;
            themeIcon.className = "bi bi-circle-half ml-2";
            autoOption.classList.add("text-primary", "font-bold");
        }
    }
  
    // Initial theme setting based on saved preference or system preference
    if (localStorage.theme === "dark") {
        document.documentElement.classList.add("dark");
        updateToggleTextAndIcon("dark");
    } else if (localStorage.theme === "light") {
        document.documentElement.classList.remove("dark");
        updateToggleTextAndIcon("light");
    } else if (localStorage.theme === "auto" || !("theme" in localStorage)) {
        // Apply auto mode: detect the system preference
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        updateToggleTextAndIcon("auto");
    }
  
    // Event listener for opening/closing the dropdown
    darkModeToggle.addEventListener("click", function (event) {
        darkModeDropdown.classList.toggle("hidden");
        chevronIcon.classList.toggle("bi-chevron-down");
        chevronIcon.classList.toggle("bi-chevron-up");
        event.stopPropagation();
    });
  
    // Close the dropdown when clicking outside of it
    document.addEventListener("click", function (event) {
        if (
            !darkModeToggle.contains(event.target) &&
            !darkModeDropdown.contains(event.target)
        ) {
            darkModeDropdown.classList.add("hidden");
            chevronIcon.classList.add("bi-chevron-down");
            chevronIcon.classList.remove("bi-chevron-up");
        }
    });
  
    // Function to set the theme and refresh the page
    window.setTheme = function (theme) {
        const html = document.documentElement;
  
        if (theme === "dark") {
            html.classList.add("dark");
            localStorage.theme = "dark";
        } else if (theme === "light") {
            html.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            // Save "auto" preference and follow system preference
            localStorage.theme = "auto";
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                html.classList.add("dark");
            } else {
                html.classList.remove("dark");
            }
        }
  
        updateToggleTextAndIcon(theme);
        darkModeDropdown.classList.add("hidden");
        chevronIcon.classList.add("bi-chevron-down");
        chevronIcon.classList.remove("bi-chevron-up");
  
        // Refresh the page to apply the theme change
        location.reload();
    };
  
    // Function to set the language
    window.setLanguage = function (lang) {
        localStorage.setItem('language', lang);
        const theme = localStorage.getItem('theme') || 'auto';
        updateToggleTextAndIcon(theme);
    };
  
    // Set language initially based on localStorage or default
    const initialLanguage = localStorage.getItem('language') || 'id';
    setLanguage(initialLanguage);
  });
  
  