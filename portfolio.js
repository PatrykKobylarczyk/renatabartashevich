//gsap
gsap.registerPlugin(ScrollTrigger);

const images = document.querySelectorAll('img'); 

images.forEach(image=>{
    const tl1 = gsap.timeline({defaults: { ease: 'slowMo.easeOut'}});
    tl1.fromTo(image, {filter: 'saturate(0)'}, {filter: 'saturate(1)', scrollTrigger: {trigger: image, start: 'top center', end: 'top 70%', scrub: 3}})     
})

