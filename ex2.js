var score = [
    ['국어', 90],
    ['영어', 65],
    ['수학', 60],
    ['독어', 19]
];


window.onload = function(){
    for(let i=0; i<score.length; i++){
        fun(`main${i}`, `${score[i][0]} ${score[i][1]}`);
    }
}

fun = (id, con) => {
    document.getElementById(id).innerHTML = con;
}