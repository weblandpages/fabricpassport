const current = document.body.dataset.page || 'home';
document.querySelectorAll('[data-nav]').forEach(a=>{if(a.dataset.nav===current)a.classList.add('active')});
const savedLanguage=localStorage.getItem('fabricpassport-language');const browserLanguage=(navigator.language||'').toLowerCase();let initialLanguage=browserLanguage.startsWith('es')?'es':'en';
function setLanguage(lang){document.documentElement.lang=lang;document.querySelectorAll('[data-en]').forEach(el=>{el.textContent=lang==='es'?(el.dataset.es||el.dataset.en):el.dataset.en});document.querySelectorAll('[data-lang-link]').forEach(el=>{el.dataset.lang=lang});document.querySelectorAll('.language-switch button').forEach(btn=>btn.classList.toggle('active',btn.dataset.lang===lang));localStorage.setItem('fabricpassport-language',lang)}
document.querySelectorAll('.language-switch button').forEach(btn=>btn.addEventListener('click',()=>setLanguage(btn.dataset.lang)));setLanguage(savedLanguage||initialLanguage);
