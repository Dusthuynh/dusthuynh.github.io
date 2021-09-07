var img=document.getElementById('xoayxoay');
var degree=0;
var temp = setInterval(() => {
    degree+=30;
    if(degree==360) degree=0;
    img.style.transform=`rotateY(${degree});`;
}, 1000);

window.onload=temp;
console.log(img);