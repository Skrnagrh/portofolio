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
            greeting: "Hello Everyone ✋, I am",
            nama: "Sukron",
            profession: "Web Developer & ",
            aboutMeContent: "I am a graduate of Informatics Engineering with a GPA of 3.73 from University Of Serang Greater, with work experience in administration and customer service. I have experience as an Administration Staff at PT. Imam Putra Mandiri. I am proficient in various programming languages and web development tools such as HTML, CSS, Java, PHP, Laravel, and JavaScript, and I have experience using Git and GitHub for version control. I possess strong interpersonal skills, including communication, teamwork, problem-solving, and time management abilities. My organizational experience in Paskibra demonstrates leadership, responsibility, and good social involvement.",
            cv:"Download CV",
            jabatan1: "Administration Staff",
            masa1: "June 2020 - April 2022",
            jabatan2: "Waiters & Cook",
            masa2: "July 2019 - October 2019",
            masa3: "June 2018 - March 2019",
            pt: "Marine and Fisheries Office",
            jabatan4: "Industrial Internship",
            masa4: "December 2016 - February 2017",

            sarjana: "University Of Serang Greater",
            alamat: "Serang City, Banten",
            jurusan: "Informatics Engineering ~ Cumulative GPA 3.73 / 4.00",
            smk: "PGRI 3 Vocational School, Serang City",
            jurusan1: "Office Administration ~ Average UN Score 87",

            porto: "Here are some of my works, including website portfolio, design portfolio, typography portfolio, and more.",
            vektor: "Vector",
            website: "Website",
            tipografi: "Typography",
            lainnya: "Others",
            pskill:"This is some of my skills, including technical skills, programming skills, and social skills",
            teknis:"Technical",
            pemrograman:"Programming",
            sosial:"Social",
            s1: "Communication",
            s2: "Teamwork",
            s3: "Problem Solving",
            s4: "Time Management",
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
