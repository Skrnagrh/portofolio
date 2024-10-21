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
            exp1: "Experience Work",
            
            // Ipm
            pt: "PT. Imam Putra Mandiri - Sakina Fried Chicken - Jhon Chicken and Burger - Banten Province Marine and Fisheries Service",
            alamat:"Bojonegara, Serang Regency, Banten,",
            duration: "Jun 2020 - Apr 2022 · 1 year 11 months",
            position1: "Administration Staff",
            duration1: "Jun 2020 - Apr 2022 · 1 year 4 months",
            jp1: "Responsible for accurately and efficiently entering employee data.",
            jp2: "Ensured the smooth reporting of employee attendance and verified it for accuracy.",
            jp3: "Conducted checks on employee working hours to optimize productivity.",
            jp4: "Managed and inputted data into the company's payroll system.",
            jp5: "Contributed to the creation of internal memos to communicate important information.",
            jp6: "Responsible for maintaining organized and easily accessible data archives.",
            jp7: "Compiled and summarized data to ensure current and orderly information.",
            jp8: "Produced accurate and complete meeting minutes.",
            // lihat:"See more",

            duration2: "Sep 2020 - Dec 2020 · 4 months",
            jp9: "Checked and ensured the tonnage of the ship's parts met specifications.",
            jp10: "Calculated and recorded the weight of each cut part of the ship to ensure data accuracy.",
            jp11: "Coordinated with field teams and heavy equipment operators to ensure smooth inspection processes.",
            jp12: "Compiled daily tonnage reports and provided recommendations to superiors based on inspection results.",
            
            duration3: "Jun 2020 - Aug 2020 · 3 months",
            jp13: "Cleared leftover material and metal debris in the work area to maintain safety and operational efficiency.",
            jp14: "Supported the cutting team by ensuring the area remained tidy and free from obstacles.",
            jp15: "Moved and sorted waste or leftover materials according to instructions and procedures.",

            // Sakina & Jhon Chiken
            alamat1:"Serang, Serang City, Banten",
            duration4: "Jul 2019 - Oct 2019 · 4 months",
            duration5: "Jun 2019 - Mar 2019 · 10 months",
            position2: "Waiters & Cook",
            jp16: "Provided friendly customer service and accommodated their needs effectively.",
            jp17: "Recommended menu items based on in-depth knowledge of food and beverage products.",
            jp18: "Accurately took orders and ensured they were processed correctly.",
            jp19: "Maintained a clean work area to ensure a comfortable environment.",
            jp20: "Contributed to delivering a pleasant dining experience for every customer.",

            // Magang
            dinas: "Banten Province Marine and Fisheries Service",
            duration6: "Dec 2016 - Feb 2017 · 3 months",
            position3: "Industrial Internship",
            jp21: "Performed data copying to streamline administration.",
            jp22: "Sorted documents according to priority to facilitate easier monitoring.",
            
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
