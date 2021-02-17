// console.log("start");
// setTimeout(()=>{
//     console.log("inside set time out")
// },3000)
// console.log("end");



async function fxn1() {
    console.log("start");
    var promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("inside settimeout")
        },3000)
    })
        await promise.then((msg)=>{
            console.log(msg);
         })
    console.log("end");
}
fxn1()