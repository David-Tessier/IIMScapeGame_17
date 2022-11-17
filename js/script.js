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

btn.addEventListener('click', function() {
    if (input.value === code) {
        var enigma1 = document.querySelector('.enigma1');
        var enigma2 = document.querySelector('.enigma2');
        enigma1.style.display = 'none';
        enigma2.style.display = 'block';   
    }
}
);


// code for fade out and intro

audioIntro = document.querySelector('.audioIntro')

var s = document.querySelector('.introbtn');
console.log(s)
s.addEventListener('click', function(){
    
    s.style.opacity = 1;
    (function fade(){(s.style.opacity-=.1)<0?s.style.display="none":setTimeout(fade,40)})();
    (function fade(){(document.querySelector('h1').style.opacity-=.1)<0?document.querySelector('h1').style.display="none":setTimeout(fade,40)})();

    audioIntro.play();
    
})
