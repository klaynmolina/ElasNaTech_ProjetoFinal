// SMARTPHONE MENU
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('close-button');

function openMenu() {
    navLinks.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    closeButton.style.visibility = 'visible';
}

function closeMenu() {
    navLinks.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
    closeButton.style.visibility = 'hidden';
}

hamburger.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);


// IDENTIFY TAB
var currentPage = window.location.pathname.split("/").pop();
var links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("identify");
    } else {
        link.classList.remove("identify");
    }
});

//

const telefone = document.getElementById('telefone');
const telefoneLink = document.getElementById('telefone-link');

const email = document.getElementById('email');
const emailLink = document.getElementById('email-link');

function togglePhone() {
    if (telefone.innerHTML == 'Telefone') {
        telefone.innerHTML = '(21) 98399-4394';
    } else {
        telefone.innerHTML = 'Telefone';
    }
}

function toggleEmail() {
    if (email.innerHTML == 'E-mail') {
        email.innerHTML = 'vanessakrmolina@hotmail.com';
    } else {
        email.innerHTML = "E-mail"
    }
}

if (!(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
    telefoneLink.addEventListener('click', togglePhone);
    emailLink.addEventListener('click', toggleEmail);
}