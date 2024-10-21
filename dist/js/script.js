// Navbar Fixed & Back To Top
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector('header');
  const toTop = document.querySelector('#to-top');

  function checkHeaderPosition() {
    const fixedNav = header.offsetTop;
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
      // Mobile: header selalu fixed, dan tampilkan toTop jika scroll > 100px
      header.classList.add('navbar-fixed');
      if (window.pageYOffset > 100) {
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
      } else {
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
      }
    } else {
      // Desktop: header dan toTop berubah berdasarkan posisi scroll
      if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
      } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
      }
    }
  }

  // Panggil fungsi saat halaman dimuat dan saat di-scroll
  checkHeaderPosition();
  window.onscroll = checkHeaderPosition;
});

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

// Function to close the navigation menu
function closeNavMenu() {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
}

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});


// Event listener for the scroll event on the window
window.addEventListener('scroll', function() {
    // Close the navigation menu when the user scrolls
    closeNavMenu();
});


// Klik di luar Humberger
// window.addEventListener('click', function(e){
//     if(e.target != hamburger && e.target != navMenu){
//         hamburger.classList.remove('hamburger-active');
//         navMenu.classList.add('hidden');
//     }
// });

// Dark Mode Toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function(){
    if(darkToggle.checked){
        html.classList.add('dark')
        localStorage.theme = 'dark';
    }else{
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

// pindahkan posisi toggle sesuai mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;

  }
  
  // untuk tahun di footer
const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;


//Hide Show  Icon Portofolio
function showImages(category) {
    const vektorSection = document.getElementById("vektor-section");
    const webSection = document.getElementById("web-section");
    const typographySection = document.getElementById("typography-section");
    const otherSection = document.getElementById("other-section");

    if (category === "vektor") {
      vektorSection.classList.remove("d-none");
      webSection.classList.add("d-none");
      typographySection.classList.add("d-none");
      otherSection.classList.add("d-none");
    } else if (category === "web") {
      vektorSection.classList.add("d-none");
      webSection.classList.remove("d-none");
      typographySection.classList.add("d-none");
      otherSection.classList.add("d-none");
    } else if (category === "typography") {
      vektorSection.classList.add("d-none");
      webSection.classList.add("d-none");
      typographySection.classList.remove("d-none");
      otherSection.classList.add("d-none");
    } else if (category === "other") {
      vektorSection.classList.add("d-none");
      webSection.classList.add("d-none");
      typographySection.classList.add("d-none");
      otherSection.classList.remove("d-none");
    }

    const links = document.querySelectorAll(".icon-links .portofolio-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });

    const activeLink = document.querySelector(`[data-page="${category}"]`);
    activeLink.classList.add("active");
    localStorage.setItem("selectedCategory", category);
  }

  // Check if there is a hash in the URL on page load
  window.addEventListener("load", () => {
    const hash = window.location.hash.substring(1);
    let defaultCategory = "vektor"; // Kategori default jika tidak ada hash

    if (hash === "web-section") {
      defaultCategory = "web";
    } else if (hash === "typography-section") {
      defaultCategory = "typography";
    } else if (hash === "other-section") {
      defaultCategory = "other";
    }

    showImages(defaultCategory);
  });


  // Active Nabbar
  // Mendapatkan elemen #homeLink, #aboutLink, #experienceLink, #educationLink, #portofolioLink, #skillLink, dan #contactLink
  var homeLink = document.getElementById("homeLink");
  var aboutLink = document.getElementById("aboutLink");
  var experienceLink = document.getElementById("experienceLink");
  var educationLink = document.getElementById("educationLink");
  var portofolioLink = document.getElementById("portofolioLink");
  var skillLink = document.getElementById("skillLink");
  var contactLink = document.getElementById("contactLink");

  // Mendapatkan elemen #about, #experience, #education, #portofolio, #skill, dan #contact
  var aboutSection = document.getElementById("about");
  var experienceSection = document.getElementById("experience");
  var educationSection = document.getElementById("education");
  var portofolioSection = document.getElementById("portofolio");
  var skillSection = document.getElementById("skill");
  var contactSection = document.getElementById("contact");

  // Mengecek status elemen aktif dari penyimpanan sesi
  var activeElement = sessionStorage.getItem("activeElement");
  if (activeElement) {
    document.getElementById(activeElement).classList.add("active");
  } else {
    // Menandai elemen Home sebagai aktif secara default
    homeLink.classList.add("active");
  }

  // Menambahkan event listener untuk menangkap saat pengguna men-scroll
  window.addEventListener("scroll", function () {
    // Mendapatkan posisi (offset) dari masing-masing elemen
    var aboutSectionOffset = aboutSection.offsetTop;
    var experienceSectionOffset = experienceSection.offsetTop;
    var educationSectionOffset = educationSection.offsetTop;
    var portofolioSectionOffset = portofolioSection.offsetTop;
    var skillSectionOffset = skillSection.offsetTop;
    var contactSectionOffset = contactSection.offsetTop;

    // Mendapatkan posisi (offset) dari titik tengah layar
    var screenHeight = window.innerHeight / 2;

    // Menentukan apakah pengguna men-scroll ke bawah elemen masing-masing
    if (window.scrollY < aboutSectionOffset - screenHeight) {
      setActiveElement("homeLink");
    } else if (
      window.scrollY > aboutSectionOffset - screenHeight &&
      window.scrollY < experienceSectionOffset - screenHeight
    ) {
      setActiveElement("aboutLink");
    } else if (
      window.scrollY > experienceSectionOffset - screenHeight &&
      window.scrollY < educationSectionOffset - screenHeight
    ) {
      setActiveElement("experienceLink");
    } else if (
      window.scrollY > educationSectionOffset - screenHeight &&
      window.scrollY < portofolioSectionOffset - screenHeight
    ) {
      setActiveElement("educationLink");
    } else if (
      window.scrollY > portofolioSectionOffset - screenHeight &&
      window.scrollY < skillSectionOffset - screenHeight
    ) {
      setActiveElement("portofolioLink");
    } else if (
      window.scrollY > skillSectionOffset - screenHeight &&
      window.scrollY < contactSectionOffset - screenHeight
    ) {
      setActiveElement("skillLink");
    } else if (window.scrollY > contactSectionOffset - screenHeight) {
      setActiveElement("contactLink");
    } else {
      setActiveElement("homeLink");
    }
  });

  // Fungsi untuk menandai elemen sebagai aktif dan menyimpan ke penyimpanan sesi
  function setActiveElement(elementId) {
    // Menghapus kelas "active" dari semua elemen navigasi
    [homeLink, aboutLink, experienceLink, educationLink, portofolioLink, skillLink, contactLink].forEach(function (el) {
      el.classList.remove("active");
    });

    // Menambahkan kelas "active" pada elemen yang aktif
    document.getElementById(elementId).classList.add("active");

    // Menyimpan informasi elemen yang aktif ke penyimpanan sesi
    sessionStorage.setItem("activeElement", elementId);
  }


  