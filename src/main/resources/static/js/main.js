let timer;
const mainSections = document.querySelectorAll('main section');
const lists = document.querySelectorAll('.section_button li a');

sectionButtonCheck();

document.addEventListener('scroll',()=>{
    if (timer) {
        clearTimeout(timer);
    }
    timer = setTimeout(()=>{
        sectionButtonCheck();
    },100)
})

function sectionButtonCheck(){
    const scrollValue = document.documentElement.scrollTop;
    const sectionNum = mainSections.length;

    mainSections.forEach((e, i, arr) => {
        if(
            ( !(i==0||i==sectionNum-1) && arr[i-1].offsetTop < scrollValue && scrollValue<mainSections[i+1].offsetTop ) || // 첫번째랑 마지막 제외
            ( i==0 && 0<=scrollValue && scrollValue<mainSections[1].offsetTop ) || // 첫번째 - html 젤 위부터 section 두번째 TOP 까지
            ( i==sectionNum-1 && mainSections[sectionNum-2].offsetTop < scrollValue && scrollValue < document.body.scrollHeight ) // 마지막 - section 밑에서 두번째 TOP 부터 html 바닥까지

        ){
            setColor(i);
        }
    })
}

function setColor(index){
    for(let i=0; i<lists.length ; i++){
        if(index != i){
            lists[i].style.background='white';
        }else{
            lists[i].style.background='#4A4546';
        }

    }
}

$('.carousel').carousel({ interval: 3500 })
