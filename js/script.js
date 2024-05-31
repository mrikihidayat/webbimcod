// Toggle active untuk hamburger 
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger di klik
document.querySelector('#humberger').onclick = (e) => {
  navbarNav.classList.toggle('active');
  e.preventDefault();
};

// Toggle active untuk search
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search');
// ketika search di klik
document.querySelector('#search').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

// Jika humberger dan search mengklik di luar elemen
const hm = document.querySelector('#humberger');
const sb = document.querySelector('#search');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }
} );

///transisi grids pilihan
document.addEventListener('DOMContentLoaded', function() {
  const gridItems = document.querySelectorAll('.box');

  gridItems.forEach(item => {
    item.addEventListener('mouseover', function() {
      this.style.transform = 'scale(1.1)';
    });

    item.addEventListener('mouseout', function() {
      this.style.transform = 'scale(1)';
    });
  });
});
