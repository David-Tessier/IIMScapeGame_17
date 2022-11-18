// when the button with class btn is clicked turn every element with class .box to red

var btn = document.querySelector('.sprayPaint');
var box = document.querySelectorAll('.code');

btn.addEventListener('click', function() {
    for (var i = 0; i < box.length; i++) {
        box[i].style.color = 'red';
    }
    }
);

var code = "psacs"

// if the answer in the input is correct, change the background color of the body to green

var btn1 = document.querySelector('.answer');
var input1 = document.querySelector('.input');
var body1 = document.querySelector('body');


let creawin = document.querySelector('.audioCreaWin')

btn1.addEventListener('click', function() {
    if (input1.value === code) {
        creawin.play()
        document.querySelector('.enigma2').style.display = "flex";

    }
}
);


// code for fade out and intro

audioIntro = document.querySelector('.audioIntro')
audioIntroNext = document.querySelector('.audioIntroNext')

var s = document.querySelector('.introbtn');


s.addEventListener('click', function(){
    
    s.style.opacity = 1;
    (function fade(){(s.style.opacity-=.1)<0?s.style.display="none":setTimeout(fade,40)})();
    (function fade(){(document.querySelector('h1').style.opacity-=.1)<0?document.querySelector('h1').style.display="none":setTimeout(fade,40)})();

    audioIntro.play();
    
})

audioIntro.addEventListener('ended', function(){
    (function fade(){(document.querySelector('.intro').style.opacity-=.1)<0?document.querySelector('.intro').style.display="none":setTimeout(fade,40)})();

    document.querySelector('header').style.display = "flex";
    document.querySelector('.enigma1').style.display = "flex";

    audioIntroNext.play()
})

audioIntroNext.addEventListener('ended', function(){
    document.querySelector('.audioCreaIntro').play()
})

creawin.addEventListener('ended', function(){
    document.querySelector('.audio3DIntro').play()
})