function f(number) {
    result=number *number;
    return result ;


}
function caculate() {
   var input = document.getElementById("input").value;
    var result=f(input);
    document.getElementById("result").innerHTML=result;


}