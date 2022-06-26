//active element in navigation

const navList = document.querySelectorAll('.nav-list');
const footerList = document.querySelectorAll('.footer-list');

//nav list
navList.forEach(el => {
    el.addEventListener('click', () => {
        navList.forEach(item => item.classList.remove("active"))
        el.classList.add("active")
    });
  });

