const year = document.querySelector('#currentyear');
const lastModify = document.querySelector('#lastModified');

const today = new Date();

year.innerHTML = `${today.getFullYear()}`;
lastModify.innerHTML = `${document.lastModified}`



