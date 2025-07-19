//전체 수직 스크롤
const wrap = new Swiper('#wrap',{
    direction:'vertical', /* 세로로 스와이퍼 */
    mousewheel:true, /* 스크롤시 이동 */
})

//프로젝트 슬라이드
const projevt1 = new Swiper('#project_swiper',{
    loop:true,/* 반복 */
    autoplay:{
	    delay:2000,
        disableOnInteraction:false,
    },
})


//내베게이션 클릭 시 해당 위치 수직 스와이프로 이동
const nav = document.querySelectorAll('nav a');
//수직스와이프 이동 함수
//수직스와이프변수명.slideTop(이동인덱스값, 지속시간)
nav.forEach((obj, idx)=>{
    console.log(obj, idx)
    obj.addEventListener('click',(e)=>{
        e.preventDefault(); //a의 href기본기능막기
        wrap.slideTo(idx,1000);
    })
})


//상세, 배너 프로젝트
const top_swiper = new Swiper('#top_swiper',{
    slidesPerView:3, /* 이미지 나열 */
    spaceBetween:10,/* 간격 */
    autoplay:{delay:0,},/* 이동 */
    speed:8000,/* 시간 */
    loop:true,/* 반복 */
    breakpoints: { //반응형 조건 속성
        300: { 
            slidesPerView: 1, 
        },
        800: {
            slidesPerView: 2,
        },
        1400: {
            slidesPerView: 3,
        },
    }
})

const bottom_swiper = new Swiper('#bottom_swiper',{
    slidesPerView:4, /* 이미지 나열 */
    spaceBetween:10,/* 간격 */
    autoplay:{delay:0,},/* 이동 */
    speed:8000,/* 시간 */
    loop:true,/* 반복 */
    breakpoints: { //반응형 조건 속성
        300: { 
            slidesPerView: 2, 
        },
        800: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 4,
        },
    }
})





//SNS 프로젝트 클릭 시 팝업 실행(클릭한 이미지가 팝업 이미지로 교체)
const snsProject = document.querySelectorAll('#top_swiper  .swiper-slide');
const popup = document.querySelector('.popup_bg');

console.log(snsProject,popup);
for(let sns of snsProject){/* snsProject의 변수 모두를 sns 변수에 담겠다. */
    sns.addEventListener('click',()=>{
        popup.style.display = 'block';
        popup.children[0].children[0].src = sns.children[0].src;
        //팝업 실행 시 전체 수직 Swiper 스크롤 기능 막기
        wrap.mousewheel.disable();//스크롤 풀기 = enable()
    })
}

popup.addEventListener('click',()=>{
    popup.style.display = 'none';
    wrap.mousewheel.enable();
})

const snsProjectB = document.querySelectorAll('#bottom_swiper .swiper-slide');
const popupB = document.querySelector('.popup_bg_b');

console.log(snsProjectB,popupB);
for(let sns1 of snsProjectB){/* snsProject의 변수 모두를 sns 변수에 담겠다. */
    sns1.addEventListener('click',()=>{
        popupB.style.display = 'block';
        popupB.children[0].children[0].src = sns1.children[0].src;
        //팝업 실행 시 전체 수직 Swiper 스크롤 기능 막기
        wrap.mousewheel.disable();//스크롤 풀기 = enable()
    })
}

popupB.addEventListener('click',()=>{
    popupB.style.display = 'none';
    wrap.mousewheel.enable();
})