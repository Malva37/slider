let getSel = sel => document.querySelector(sel);
const sliders = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prev = getSel('.prev');
const next = getSel('.next');
const autoPlay = getSel('.playPause');


let statusAutoPlay = true;
let current = 0;
let idSetInterval;

reset = () => {
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
}

startSlide = () => {
    reset();
    sliders[current].style.display = 'block';
    dots[current].classList.add('active');

}
startSlide();

slideLeft = () => {
    reset();
    sliders[current - 1].style.display = 'block';
    dots[current - 1].classList.add('active');
    current--;
}
slideRight = () => {
    reset();
    if (current == sliders.length - 1) {
        current = -1;
    }
    sliders[current + 1].style.display = 'block';
    dots[current + 1].classList.add('active');
    current++;
}

prev.onclick = () => {
    if (current == 0) {
        current = sliders.length;
    }
    slideLeft();
}
next.onclick = () => {
    slideRight();
}


dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        current = indexDot;
        startSlide();
    })
})

autoPlay.onclick = () => {
    if (statusAutoPlay) {
        idSetInterval = setInterval(slideRight, 2000);
        autoPlay.textContent = 'pause';
    } else {
        clearInterval(idSetInterval);
        autoPlay.textContent = 'play';
    }
    statusAutoPlay = !statusAutoPlay;
}