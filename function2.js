//2중 ARRAY, 2중 정렬 값 접근하는 방법

var score = [
    ['국어', 90],
    ['영어', 65],
    ['수학', 60],
    ['독어', 19]
];

var inmyScore = ''; //복잡한 내용을 한꺼번에 담을 변수를 생성한다.
window.onload = function(){ //화면이 열리면 아래 내용 실행. load이벤트 시작스코프
    for(let i in score){ //정렬(array)이 있을때만
        inmyScore += `<p>${score[i][0]} ${score[i][1]}</p>`;
    }
    fun('main', inmyScore);
} // load 이벤트 마침 스코프

//ES6 화살표함수 return 키워드 생략 가능
// fun ('객체아이디', '삽입될내용')
fun = (id, con) => {
    document.getElementById(id).innerHTML = con;
}