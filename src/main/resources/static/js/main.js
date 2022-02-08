//test
//client rolling banner
let move = 1;//-1: 왼쪽으로 1:오른쪽으로
const moveLeft = document.querySelector('.partners a .fa-chevron-left');
const moveRight = document.querySelector('.partners a .fa-chevron-right');
moveLeft.addEventListener('mouseover',()=>{
    move = -1;
})
moveRight.addEventListener('mouseover',()=>{
    move = 1;
})

window.onload = function() {
    let bannerLeft=0;
    let first=1;
    let last;
    let imgCnt=0;
    let $img = $(".partners ul li");
    let $first;
    let $last;

    $img.each(function(){   // 5px 간격으로 배너 처음 위치 시킴
        $(this).css("left",bannerLeft);
        bannerLeft += $(this).width()+5;
        $(this).attr("id", "banner"+(++imgCnt));  // img에 id 속성 추가
    });

    if( imgCnt > 9){                //배너 9개 이상이면 이동시킴
        last = imgCnt;

        setInterval(function() {
            $img.each(function(){
                $(this).css("left", $(this).position().left+move); // 1px씩 왼쪽으로 이동
            });
            $first = $("#banner"+first);
            $last = $("#banner"+last);
            if(move==-1 && $first.position().left < -200) {    // 제일 앞에 배너 제일 뒤로 옮김
                $first.css("left", $last.position().left + $last.width()+5 );
                first++;
                last++;
                if(last > imgCnt) { last=1; }
                if(first > imgCnt) { first=1; }
            }else if(move==1 && $last.position().left > 1300) {    // 제일 앞에 배너 제일 뒤로 옮김
                $last.css("left", $first.position().left - $first.width()-5 );
                first--;
                last--;
                if(last < 1) { last=imgCnt; }
                if(first < 1) { first=imgCnt; }
            }
        }, 50);   //여기 값을 조정하면 속도를 조정할 수 있다.(위에 1px 이동하는 부분도 조정하면
        //깔끔하게 변경가능하다
    }
};


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