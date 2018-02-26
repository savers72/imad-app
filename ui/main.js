console.log('Loaded!');
// change the text
var element = document.getElementById('main.text');
element.innerHTML = 'SUDHA SINGH RAJPUT';

//move the image
var img = document.getElementById('asd');
var marginLeft = 0;
function moveRight()
{
    marginLeft= marginLeft+10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight,100);
    
}