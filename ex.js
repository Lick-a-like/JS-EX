    // ES6 화살표함수, return 키워드 생략 가능
fun = (num) => {
    document.getElementById('main').innerHTML = num;
}
// 화살표함수 fun은 인자 num을 받으면 그 num을 #main 객체에 출력한다.


window.onload = function(){

    var btn1 = document.getElementsByTagName('button')[0]
    btn1.onclick = function() {
        this.innerText = 'enter';
    }

    var btn2 = document.getElementsByTagName('button')[1]
    btn2.onclick = function() {
        this.innerText = 'delete';
    }

}