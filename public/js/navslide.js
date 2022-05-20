window.addEventListener('scroll', function () {
    let head = document.querySelector('nav');
    let windowPos = window.scrollY > 0;
    head.classList.toggle('scroll-active', windowPos);
})