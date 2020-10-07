let html1 = document.querySelector('#html1');
let style1 = document.querySelector('#style1')
let string = `
/* 你好，我叫纪小懒
 * 下面生成一个太极图
/* 无极生太极
 */
#div1 {
    border-radius:50%;
    box-shadow:0 0 5px rgba(0,0,0,0.5);
    width:260px;
    height:260px;
    border:none;
}
/* 太极生两仪
 */
#div1 {
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 两仪生四象 
 */
#div1::before {
    width:130px;
    height:130px;
    top:0;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after {
    width:130px;
    height:130px;
    top:50%;
    left:50%;
    transform:translateX(-50%);
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
/* 不会生八卦
 */
`
let string2 = '';
let n = -1;

function fn() {

    setTimeout(() => {
        n = n + 1;
        if (string[n] === '\n') {
            string2 = string2 + '<br>';
        } else if (string[n] === ' '){
            string2 = string2 + '&nbsp;'
        }
        else {
            string2 = string2 + string[n];
        }
        html1.innerHTML = string2;
        style1.innerHTML = string.substring(0, n);
        window.scrollTo(0, 65536);
        // html1.scrollTo(0, 655236);
        if (n < string.length-1) {
            fn()
        }
    }, 30)
}
fn();