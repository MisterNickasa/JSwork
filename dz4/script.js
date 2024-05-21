//1 punkt 
let a = parseInt(prompt("Введите число a: "));
let b = parseInt(prompt("Введите число b: "));
function ravnator(a,b){
    if (a<b){
        return "-1";
    } else if(a>b){
        return "1"; 
    } else {
        return "0"; 
    }
}
let result = ravnator(a,b);
alert("Итого: " + result);
//2 punkt 
let num = parseInt(prompt("Введите число для которого хотите найти факториал: "));
function factorial(num){
    if (num === 0){
        return 1;
    } else {
        return num* factorial(num-1);
    }
}
let result1 = factorial(num);
alert("Факториал числа: " + num + " равен " + result1);
//3 punkt
let n1 = prompt("Введите 1 число: ");
let n2 = prompt("Введите 2 число: ");
let n3 = prompt("Введите 3 число: "); 
function summachisel(n1,n2,n3){
    return n1 + n2 + n3;
}
let result2 = summachisel(n1,n2,n3);
alert("Итого: "+ result2);
//4 punkt
function rectangArea(length,width){
    if (width === undefined ){
        width = length;
    }
    return length * width;
}
let length = parseInt(prompt("Введите длину: "));
let width = parseInt(prompt("Введите ширину: "));
let result3 = rectangArea(length,width);
alert("Площадъ: "+ result3);
//5 punkt
