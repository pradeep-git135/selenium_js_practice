var person1 = {
        fname:"pradeep",
        lanme:"C R",
        fullName:function(){
            console.log(this.fname+" "+this.lanme)
        }
    }

    var jsonobj = JSON.stringify(person1)
    console.log(jsonobj)

    var xyz = JSON.parse(jsonobj)
    console.log(xyz)
