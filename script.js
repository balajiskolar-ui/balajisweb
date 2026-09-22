const $=s=>document.querySelector(s);const $$=s=>document.querySelectorAll(s);
const progress=$('#progressBar');
window.addEventListener('scroll',()=>{const h=document.documentElement;progress.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+'%';document.querySelector('.nav-wrap').style.borderBottomColor=scrollY>30?'rgba(255,255,255,.07)':'transparent'});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});$$('.reveal').forEach(e=>io.observe(e));
const glow=$('.cursor-glow');window.addEventListener('mousemove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
$('#menu').addEventListener('click',()=>$('#navLinks').classList.toggle('open'));$$('.nav-links a').forEach(a=>a.addEventListener('click',()=>$('#navLinks').classList.remove('open')));
// gentle tilt on desktop cards
$$('.project-card,.skill-card,.cert').forEach(card=>{card.addEventListener('mousemove',e=>{if(innerWidth<900)return;const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(900px) rotateX(${y*-2}deg) rotateY(${x*2}deg) translateY(-3px)`});card.addEventListener('mouseleave',()=>card.style.transform='')});
