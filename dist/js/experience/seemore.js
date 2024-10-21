// Inisialisasi bahasa yang akan digunakan ('id' atau 'en')
const currentLanguage = localStorage.getItem("language") || "id"; // Default ke 'id'

// Teks untuk kedua bahasa
const translations = {
    en: {
        showMore: 'See more',
        showLess: 'See less',
    },
    id: {
        showMore: 'Lihat lebih banyak',
        showLess: 'Lihat lebih sedikit',
    },
};

// Function to toggle job descriptions
function setupToggle(jobDescriptionId, buttonId) {
    const jobDescription = document.getElementById(jobDescriptionId);
    const toggleButton = document.getElementById(buttonId);
    let expanded = false;

    // Hide all list items initially except the first one
    const listItems = jobDescription.querySelectorAll("li");
    listItems.forEach((item, index) => {
        if (index > 0) item.style.display = "none";
    });

    // Set initial button text based on the current language
    toggleButton.textContent = translations[currentLanguage].showMore;

    toggleButton.addEventListener("click", () => {
        if (!expanded) {
            listItems.forEach((item) => (item.style.display = "list-item"));
            toggleButton.textContent = translations[currentLanguage].showLess;
        } else {
            listItems.forEach((item, index) => {
                if (index > 0) item.style.display = "none";
            });
            toggleButton.textContent = translations[currentLanguage].showMore;
        }
        expanded = !expanded;
    });
}

// Set up toggles for each section
setupToggle("jobDescription1", "toggleButton1");
setupToggle("jobDescription2", "toggleButton2");
setupToggle("jobDescription3", "toggleButton3");
setupToggle("jobDescription4", "toggleButton4");
setupToggle("jobDescription5", "toggleButton5");
setupToggle("jobDescription6", "toggleButton6");
// Tambahkan setupToggle untuk elemen lainnya jika ada

// Fungsi untuk mengubah bahasa
function setLanguage(lang) {
    localStorage.setItem("language", lang); // Simpan bahasa yang dipilih
    window.location.reload(); // Refresh halaman setelah bahasa diubah
}

// Fungsi untuk mengubah teks di halaman
function changeLanguage(lang) {
    document.querySelectorAll(".translate").forEach((element) => {
        const key = element.getAttribute("data-key");
        if (translations[lang][key]) {
            element.innerText = translations[lang][key];
        }
    });
}

// Inisialisasi dengan bahasa default
changeLanguage(currentLanguage);

// Set active button state
const btnID = document.getElementById("btnID");
const btnEN = document.getElementById("btnEN");
if (btnID && btnEN) {
    btnID.addEventListener("click", () => setLanguage("id"));
    btnEN.addEventListener("click", () => setLanguage("en"));

    if (currentLanguage === "id") {
        btnID.classList.add("text-primary", "font-bold");
        btnEN.classList.remove("text-primary", "font-bold");
    } else {
        btnEN.classList.add("text-primary", "font-bold");
        btnID.classList.remove("text-primary", "font-bold");
    }
}