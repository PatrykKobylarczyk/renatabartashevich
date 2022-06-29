//active element in navigation

const navList = document.querySelectorAll('.nav-list');
                             
//nav list
navList.forEach(el => {
    el.addEventListener('click', () => {
        navList.forEach(item, i => item.classList.remove("active"))
        el.classList.add("active")
        navListPortfolio[i].classList.add('active')
    });
});

