document.addEventListener("DOMContentLoaded", function () {
    const btnID = document.getElementById("btnID");
    const btnEN = document.getElementById("btnEN");
 
    const texts = {
        id: {
            home: "Beranda",
        },
        en: {
            home: "Home",
            about: "About Me",
            experience: "Experience",
            education: "Education",
            portofolio: "Portfolio",
            skill: "Skills",
            contact: "Contact",
            light: "Light",
            dark:"Dark",
            auto:"Auto",
            description: "Vector Design - Web Projects - Typography Design - Others",
            vektor:"Vector",
            web: "Website",
            tipografi: "Typography",
            lainnya:"Others",
            buka:"Open",
            lihat:"See more",

            // Web section
            w1:"Decision Support System for Tourist Object Selection",
            w2:"Mail archive system",
            w3:"Permanent Employee Selection Decision Support System",
            w4:"Decision Support System for Selecting Boarding House Recommendations",
            w5:"Employee Selection Decision Support System for Layoffs",
            w6:"The Best Student Selection Decision Support System",
            w7:"Employee Attendance Data System",
            w8:"Company Profile Landing Page",
            detail:"Details",
            kereta:"Train Ticket Transactions",
            perpus:"Library Application",
            
            lokasi:"Location",
            kota:"Serang City, Banten",
        },
    };

    // Memuat bahasa yang tersimpan, atau default ke 'id'
    let currentLang = localStorage.getItem("language") || "id";

    // Fungsi untuk mengubah bahasa
    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem("language", lang); // Simpan bahasa yang dipilih

        // Refresh halaman setelah bahasa diubah
        window.location.reload();
    }

    // Fungsi untuk mengubah teks di halaman
    function changeLanguage(lang) {
        document.querySelectorAll(".translate").forEach((element) => {
            const key = element.getAttribute("data-key");
            if (texts[lang][key]) {
                element.innerText = texts[lang][key];
            }
        });
    }

    // Event listener untuk tombol bahasa
    btnID.addEventListener("click", function () {
        setLanguage("id");
    });

    btnEN.addEventListener("click", function () {
        setLanguage("en");
    });

    // Inisialisasi dengan bahasa default
    changeLanguage(currentLang);

    // Atur tampilan tombol yang aktif
    if (currentLang === "id") {
        btnID.classList.add("text-primary", "font-bold");
        btnEN.classList.remove("text-primary", "font-bold");
    } else {
        btnEN.classList.add("text-primary", "font-bold");
        btnID.classList.remove("text-primary", "font-bold");
    }
});
