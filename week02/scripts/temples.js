const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const currentYear = new Date().getFullYear();

document.getElementById("currentyear").innerHTML = currentYear;
document.getElementById("lastModified").innerHTML = document.lastModified;



hamButton.addEventListener('click', () => {
    console.log('hola');
    
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});