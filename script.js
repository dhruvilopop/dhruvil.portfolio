const btn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav-wrap');
btn.addEventListener('click',()=>{nav.classList.toggle('menu-open');btn.setAttribute('aria-expanded',nav.classList.contains('menu-open'))});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('menu-open')));
document.getElementById('year').textContent=new Date().getFullYear();
