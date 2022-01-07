function addNum(){
    let a = 10;
    return a;
}

function multiNum(a, b){ //매개변수, 인자를 가진 함수;
    let result = a + b;
    return result;
}

let num = addNum();
console.log(num);

let num2 = multiNum(1,1);
console.log(num2); //결과가 2가 나오도록 실행문 수정하기