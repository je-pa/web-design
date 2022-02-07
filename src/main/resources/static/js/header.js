const headerElem = document.querySelector('header');
const navElem = document.querySelector('header > nav');
navElem.addEventListener('mouseover',()=>{
    headerElem.classList.remove('off');
    headerElem.classList.add('on');
})
navElem.addEventListener('mouseout',()=>{
    headerElem.classList.remove('on');
    headerElem.classList.add('off');
})

window.addEventListener('scroll',()=>{
    if(document.documentElement.scrollTop>40){
        headerElem.classList.remove('off');
        headerElem.classList.add('on');
    }else{
        headerElem.classList.remove('on');
        headerElem.classList.add('off');
    }
})