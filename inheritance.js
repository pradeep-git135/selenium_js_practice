// var person1 = {
//     fname:"pradeep",
//     lanme:"C R",
//     fullName:function(){
//         console.log(this.fname+" "+this.lanme)
//     }
// }
//  var person2 = {
//      adress:"India"
//  }
// person2.___proto__ = person1
// console.log(person2)

// var person3 = Object.create(person1)
// console.log(person2)


function Cars(){
    this.make = "BMW"
    this.color = "blue"
    this.fuel = "diesel"
}

var c1 = new Cars()
c1.engine = "2.0"
c1.color = "red"
// c1.prototype.color = "red"
console.log(c1)


// var c2 = new Cars("toyota","white", "electric")
// console.log(c1)
// console.log(c2)

var a = 10;

var a = new Number(10)
var b = new String("hello world")
var c = new Boolean(false)