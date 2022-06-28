//active element in navigation

const navList = document.querySelectorAll('.nav-list');
const navListPortfolio = document.querySelectorAll('.nav-list-portfolio');
console.log(navList); 
                               
//nav list
navList.forEach(el => {
    el.addEventListener('click', () => {
        navList.forEach(item, i => item.classList.remove("active"))
        el.classList.add("active")
        navListPortfolio[i].classList.add('active')
    });
});

