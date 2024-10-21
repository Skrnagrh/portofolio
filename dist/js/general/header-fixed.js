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
  