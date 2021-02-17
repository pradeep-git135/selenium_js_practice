// function outer(a){
//     function inner(b){
//         return console.log(a+b)

//     }
//     return inner
// }

// var result = outer(5)
// console.log(result(7))


function outer(a) {
    function inner(b) {
        return a+b
    }
    return inner
}
x = outer(5)
var result = x(7)
console.log(result);


// inner function still having access on variable 
// that declared in outer function even after execution of outer function