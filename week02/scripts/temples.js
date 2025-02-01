const hamburger = document.querySelector('.hamburger');
const navlinks = document.getElementById('navlinks');

hamburger.addEventListener('click', () => {
    console.log('clicked');
    console.log(navlinks);
    
    navlinks.classList.toggle('active');
})

