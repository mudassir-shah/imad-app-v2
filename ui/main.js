console.log('Loaded!');

//Move the image
var img = documment.getElementbyId('https://scontent.xx.fbcdn.net/v/t1.0-9/15109555_1235604089834160_8436133228171742354_n.jpg?oh=3bc0ff7b3a8de4b06936eb3b63e6864a&amp;oe=596B3A18');
var marginLeft = 0;
function moveRight() {
    marginLeft = marginLeft + 10;
    img.stle.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight, 100);
};