let sol = document.getElementById('sol');
let horizonte = document.getElementById('horizonte');
let road = document.getElementById('road');
let text = document.getElementById('text');
let btn = document.getElementById('btn');

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    sol.style.top = value * 0.85 + 'px';
    horizonte.style.bottom = value * -0.3 + 'px';
    text.style.bottom = value * 1.75 +'px';
    btn.style.bottom = value * 1.75 + 'px';
})