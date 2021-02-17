class Dateclass {
    d = new Date()

    getday(){
        console.log(this.d.toDateString().split(" ")[0]); 
        return this.d.toDateString().split(" ")[0]
    }
    getmonth(){
        console.log(this.d.toDateString().split(" ")[1]); 
        return this.d.toDateString().split(" ")[1]
    }
    getdate(){
        console.log(this.d.toDateString().split(" ")[2]); 
        return this.d.toDateString().split(" ")[2]
    }
    getyear(){
        console.log(this.d.toDateString().split(" ")[3]); 
        return this.d.toDateString().split(" ")[3]
    }
}
var obj = new Dateclass()
module.exports = obj
// obj.getday()
// obj.getmonth()
// obj.getdate()
// obj.getyear()