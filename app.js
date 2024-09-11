var bodyEl = document.querySelector("body")

bodyEl.addEventListener('mousemove',
    function(dets){
var posx = dets.clientX;
var posy = dets.clientY;
var spanEl = document.createElement("span");
spanEl.style.left =posx + 'px'
spanEl.style.top =posy + 'px'
var size = Math.random()*100;
spanEl.style.width = size + 'px'
spanEl.style.height = size + 'px'
bodyEl.appendChild(spanEl);
setTimeout(() => {
    spanEl.remove();

},3000);
})