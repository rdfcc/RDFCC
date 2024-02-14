document.addEventListener('astro:page-load', () => {
  document.querySelector('.hamburger').addEventListener('click', () => {
    if (document.querySelector('.nav-links').classList.contains('invisible')) {
      document.querySelector('.nav-links').classList.replace('invisible','visible');
    } else {
    document.querySelector('.nav-links').classList.replace('visible','invisible');
  }
  });
});