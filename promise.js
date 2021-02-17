// // async function fxn1(){
// //         console.log("start");

// //         var res =  await setTimeout(()=>{
// //              console.log("inside time out")
// //         },3000)

// //         console.log("end")
// //         return res
// // }
// // var value = fxn1()
// // console.log(value)
// // value.then((resp)=>{
// //     console.log(resp)
// // }).catch((err)=>{
// //     console.log(err)
// // })

// var promise = new Promise((resolve, reject)=>{
//     var x = 2
//     if(x==3){
//         resolve("successMsg")
//     }else{
//         reject("errormsg")
//     }
// })
// promise.then((a)=>{
//     console.log(a)
// }).catch((errmsg)=>{
//         console.log(errmsg);
// })

// function getdata(){
//     var success =  new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("successMsg")
//         },3000);
//     })
//     return success
// }


//actual e.g for promise 
async function call() {
    console.log("start");
    var success =  new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("successMsg")
        },3000)
    })
    await success.then((msg)=>{
        console.log(msg);
    })
    console.log("end");
}
call()

// var fxn1 = function (){
//     return new Promise((resolve, reject)=>{
//         resolve("completed 1")
//     }) 
// }
    
// var fxn2 = function (){
//     return new Promise((resolve, reject)=>{
//         resolve("completed 2")
//     }) 
// }

// var fxn3 = function (){
//     return new Promise((resolve, reject)=>{
//         resolve("completed 3")
//     }) 
// }

// fxn1().then((msg)=>{
//     console.log(msg);
//     return fxn2()
// }).then((msg)=>{
//     console.log(msg);
//     return fxn3()
// }).then((msg)=>{
//     console.log(msg)
//     console.log("all fxns eexecuted successfully")
// })

Promise.race([fxn1(), fxn2(), fxn3()]).then(()=>{
    console.log("completed all the 3");
})