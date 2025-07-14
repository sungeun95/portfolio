//전체 수직 스크롤
const wrap = new Swiper('#wrap',{
    direction:'vertical', /* 세로로 스와이퍼 */
    mousewheel:true, /* 스크롤시 이동 */
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