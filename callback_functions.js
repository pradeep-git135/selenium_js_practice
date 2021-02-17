function fun1(a){
    console.log("inside fun1")
    console.log("after execution of fun1")
    a()
}



fun1(function fun2(){
    console.log("callback fxn")
})