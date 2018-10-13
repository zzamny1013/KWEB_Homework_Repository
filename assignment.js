const fs = require('fs');

const makeRequest = async() => {
    try{
        const awaitData1 = await fs.writeFile('./1.txt', '11111');
        if(awaitData1.needsAnotherRequest){
            try{
                const awaitData2 = await fs.writeFile('./2.txt', data1 + '22222');
                if(awaitData2.needsAnotherRequest){
                    const awaitData3 = await amkeAnotherRequest(awaitData2);
                    fs.writeFile('./3.txt', data2 + '33333')
                    return awaitData2;
                }
                else {
                    console.log('3.txt created');
                    fs.readFile('.3.txt', 'UTF-8');
                    return awaitData2;
                }
            }
            catch (err) {
                console.log('2.txt created');
                fs.readFile('./2.txt', 'UTF-8');
            }
            
        }
    }
    catch (err) {
        console.log('1.txt created');
        fs.readFile('./1.txt', 'UTF-8');
    }
}