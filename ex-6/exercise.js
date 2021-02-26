// write your JS here
// remember to always test in the browser
// to see if everything works correctly
function greaterNum(num1, num2){
    if(num1> num2){
       return alert(num1 + ' is greater than ' + num2)
    }
    else if(num2 > num1){
        return alert (num2 + ' is greater than ' + num1)
    }
    else{
        alert('Both Numbers are equal')
    }
}

greaterNum(6, 2)
greaterNum(4,9)
greaterNum(3, 3)