const xlsxFile = require('read-excel-file/node');
 
xlsxFile('./Data.xlsx').then((rows) => {

    for (i in rows){
       for (j in rows[i]){
           var data = rows[0][0]
           console.log( data);
        }
    }
})