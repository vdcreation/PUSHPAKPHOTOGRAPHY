const items=document.querySelectorAll('.animate');
const show=()=>{
items.forEach(i=>{
if(i.getBoundingClientRect().top < window.innerHeight-100){
i.classList.add('show');
}
});
};
window.addEventListener('scroll',show);
show();
