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

btn1.addEventListener('click', function() {
    if (input.value === code) {
        var enigma2 = document.querySelector('.enigma2');
        enigma2.style.display = 'flex';   
    }
}
);