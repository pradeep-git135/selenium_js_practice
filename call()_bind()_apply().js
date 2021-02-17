var person1 = {
    fname:"pradeep",
    lanme:"C R",
    fullName:function(){
        console.log(this.fname+" "+this.lanme)
    }
}
var person2 = {
    fname:"Bagath",
    lanme:"Singh",
}

person2.__proto__ = person1

console.log(person2);

// person1.fullName.call(person2,"a","b", 23)
// person1.fullName.apply(person2,["a","b",23])
// var result = person1.fullName.bind(person1)
// result()



// function greeting(){
//     console.log(`hello ${this.fname}  ${this.lanme}`)
// }
// greeting.call(person1,"a","b",2,45)  //greeting.call(person1)
// greeting.apply(person1,["a","b",2,45])


// var res  = greeting.bind(person2,2,3,4,5,)
// res()
// // person1.fullName.call(person2)


// function multiply(a,b){
//     console.log(a*b)
// }
// var product = multiply.bind(this,5)
// product(4)