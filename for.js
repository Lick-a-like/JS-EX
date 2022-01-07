let arr = ['1', '10', '100', '1000', '10000']
//es5
// for (초기값, 조건값, 증가값)
for(var i = 0; i <arr.length; i++){
    console.log(`arr정렬의 ${i} index자리의 값은 ${arr[i]}입니다.`)
}

function arrfun(){
    let arr = ['1', '10', '100', '1000', '10000']
    for(var i = 0; i <arr.length; i++){
        console.log(`arr정렬의 ${i} index자리의 값은 ${arr[i]}입니다.`)
    }
}

arrfun();

//매개변수가 있는 함수로 만들어서 index가 1부터 출력되는 함수로 수정
function arrfun(s){
    let arr = ['1', '10', '100', '1000', '10000']
    for(var i = s; i <arr.length; i++){
        console.log(`arr정렬의 ${i} index자리의 값은 ${arr[i]}입니다.`)
    }
}

arrfun(1);

//매개변수가 있는 함수이면서, 출력되는 개수 조절.....
function arrfun(s, total){
    let arr = ['1', '10', '100', '1000', '10000']
    for(var i = s; i <total; i++){
        console.log(`arr정렬의 ${i} index자리의 값은 ${arr[i]}입니다.`)
    }
}

arrfun(0, 2);