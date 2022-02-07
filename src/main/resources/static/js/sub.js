const contact = document.querySelector('.contact');
const contactOpenCloseButton = document.querySelector('.contact > a > i:nth-child(1)');
contactOpenCloseButton.addEventListener('click',()=>{
    if(contact.classList.contains('open')){
        contact.classList.remove('open');
        contactOpenCloseButton.classList.replace('fa-chevron-right','fa-chevron-left');

    }else{
        contact.classList.add('open');
        contactOpenCloseButton.classList.replace('fa-chevron-left','fa-chevron-right');
    }
})

