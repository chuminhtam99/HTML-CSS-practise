const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const slider = $('.container-has-carousel__img-list');
const dots = $$(".container-has-carousel__round-btn");
const items = $$('.container-has-carousel__img');
const leftButton = $('.container-has-carousel__left-btn');
const rightButton = $('.container-has-carousel__right-btn');

function toMove(dot, previousDot){
    let prevId = previousDot.id.replace( /^\D+/g, '');
    let prevItem = $(`#slide${prevId}`);

    previousDot.classList.remove('active-dot');
    dot.classList.add('active-dot');
    let id = dot.id.replace( /^\D+/g, '');
    let item = $(`#slide${id}`);

    slider.style.left = -prevItem.offsetLeft + 'px';

    slider.style.animation = `slidefrom${prevId} .3s forwards`;
    var cssAnimation = document.createElement('style');
    cssAnimation.type = 'text/css';
    var rules = document.createTextNode(`@-webkit-keyframes slidefrom${prevId} {`+
    `100% { left: -${item.offsetLeft}px; }`+
    '}');
    cssAnimation.appendChild(rules);
    slider.appendChild(cssAnimation);
}

dots.forEach((dot, index) => {
    dot.onclick = (e) => {    
        e.preventDefault();
        let previousDot = $('.active-dot');
        toMove(dot,previousDot);

    }
})

var autoMove = setInterval(() => {
    let previousDot = $('.active-dot');
    let dot = previousDot.nextElementSibling;
    if( dot){
        toMove(dot,previousDot);
    } else {
        let lastDot = $('.active-dot');       
        let dot = dots[0];
        toMove(dot,lastDot);
    }
     
}, 7000)

leftButton.onclick = function (e) {
    e.preventDefault();
    let oldDot = $('.active-dot');
    let dot = oldDot.previousElementSibling;
    if( dot){
        toMove(dot,oldDot);
    } else {
        var firstDot = $('.active-dot');       
        let dot = dots[dots.length - 1];
        toMove(dot,firstDot);
    }

}

rightButton.onclick = function (e) {
    e.preventDefault();
    let oldDot = $('.active-dot');
    let dot = oldDot.nextElementSibling;
    if( dot){
        toMove(dot,oldDot);
    } else {
        var lastDot = $('.active-dot');       
        let dot = dots[0];
        toMove(dot,lastDot);
    }

}




// ------------------


var suggestContainer = document.querySelector('.container__suggest-heading');
var suggestItems = suggestContainer.querySelectorAll('a');
suggestItems[0].onclick = function(){
    suggestItems[0].classList.add('active-suggest');
    suggestItems[1].classList.remove('active-suggest');
}

suggestItems[1].onclick = function(){
    suggestItems[1].classList.add('active-suggest');
    suggestItems[0].classList.remove('active-suggest');

}


