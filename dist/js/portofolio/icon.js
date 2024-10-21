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