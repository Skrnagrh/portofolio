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

// Mengecek URL halaman saat ini
var currentPage = window.location.pathname;

// Mengecek status elemen aktif dari penyimpanan sesi
var activeElement = sessionStorage.getItem("activeElement");

// Jika halaman saat ini adalah index.html atau root, set homeLink sebagai aktif
if (currentPage === "/" || currentPage.endsWith("index.html")) {
  setActiveElement("homeLink");
} else if (activeElement) {
  document.getElementById(activeElement).classList.add("active");
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
  [
    homeLink,
    aboutLink,
    experienceLink,
    educationLink,
    portofolioLink,
    skillLink,
    contactLink
  ].forEach(function (el) {
    el.classList.remove("active");
  });

  // Menambahkan kelas "active" pada elemen yang aktif
  document.getElementById(elementId).classList.add("active");

  // Menyimpan informasi elemen yang aktif ke penyimpanan sesi
  sessionStorage.setItem("activeElement", elementId);
}
