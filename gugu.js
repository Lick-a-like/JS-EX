window.onload = () => { //es6의 화살표함수

        document.getElementById('trigger').onclick = () =>{

            guguDan(5);
        }

        function guguDan(num){

        let guguText = "";

        for(let i=2; i<10; i++){ //2에서 9까지를 출력하기 위해 7번 실행
        guguText +=`<li>${num} X ${i} = ${num * i}</li>` //추가대입
    }
    document.getElementById('gugu').innerHTML = guguText; // 실행 아이디가 gugu인 객체안에 태그 삽입해서 출력하기
    }
}
//3단 출력되도록 처리하기