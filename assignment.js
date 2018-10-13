const fs = require('fs');

function kkk(){
    return new Promise(function (resolve, reject){
        fs.writeFile('./.txt', '11111', function(response){
            if(response){
                console.log('1.txt created');
                resolve(response);
            }
            reject(new Error("Request is failed"));
        });
    });
}

kkk()
.then(function(){fs.readFile('./1.txt', 'UTF-8');})
.catch(function(err, data1){fs.writeFile('./2.txt', data1 + '22222');})
.catch(function(err){console.log('2 txt created');})

.then(function(){fs.readFile('./2.txt', 'UTF-8');})
.catch(function(err,data2){fs.writeFile('./3.txt', data2+'33333');})
.catch(function(err, data3){console.log(data3);})