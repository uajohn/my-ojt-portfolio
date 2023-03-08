const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}

var typed2 = new Typed('.input', {
            strings: ['John Joseph Narzo.','Web Development Beginner.','Programmer.','Athlete.','Gamer.'],
            typeSpeed: 70,
            backSpeed: 70,
            loop: true
        });