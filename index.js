


document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementsByClassName('header');
  
    window.addEventListener('scroll', function() {
      if (window.scrollY >1) {
        header.classList.add('scrolled-bg');
      } else {
        header.classList.remove('scrolled-bg');
      
      }
    });
  });




  const menuToggle = document.querySelector('[data-nav-toggler]');
  const navbarMenu = document.querySelector('.navbar-menu');

  menuToggle.addEventListener('click', function () {
    navbarMenu.classList.toggle('active');
  });

  // const dropdown = document.querySelector('.dropdown');
  // const dropdownMenu = document.querySelector('.dropdown-menu');

  // dropdown.addEventListener('click', function () {
  //   dropdownMenu.classList.toggle('active');
  // });
