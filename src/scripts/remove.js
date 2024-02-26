document.addEventListener('astro:after-swap', () => {
const pageTitleDiv = document.getElementById('pageTitleDiv');
const pageTitle = document.getElementById('pageTitle');
if (pageTitle.innerText == "") {pageTitleDiv.remove();}
});

const pageTitleDiv = document.getElementById('pageTitleDiv');
const pageTitle = document.getElementById('pageTitle');
if (pageTitle.innerText == "") {pageTitleDiv.remove();}
