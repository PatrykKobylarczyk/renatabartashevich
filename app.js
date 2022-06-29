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

//animations GSAP
gsap.registerPlugin(ScrollTrigger);

const titles = document.querySelector('.main-section-title') 
const posters = document.querySelector('.main-section-posters')
const texts = document.querySelector('.main-section-text')
const works = document.querySelector('.main-section-works')


const tl1 = gsap.timeline({defaults: { ease: 'slowMo.easeOut'}});
const tl2 = gsap.timeline({defaults: { ease: 'slowMo.easeOut'}, scrollTrigger: {trigger: '.main-section-text', start: 'top 50%'}});
const tl3 = gsap.timeline({defaults: { ease: 'slowMo.easeOut'}, scrollTrigger: {trigger: '.main-section-works', start: 'top 50%'}});

tl1.fromTo(titles.children, {y: '+=50', opacity: 0 }, {y: '0', opacity: 1, stagger: .3, duration: .7})
  .fromTo(posters.children, {y: '+=50', opacity: 0 }, {y: '0', opacity: 1, stagger: .3, duration: .7});

tl2.fromTo(texts.children, 
    {y: '+=50', opacity: 0 }, 
    {y: '0', opacity: 1, stagger: .3, duration: .7, });

tl3.fromTo(works.children, 
    {y: '+=50', opacity: 0 }, 
    {y: '0', opacity: 1, stagger: .5, duration: .7});

