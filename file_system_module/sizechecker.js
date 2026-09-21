const fs = require('fs')
function sizechecker(filename){
    const limit = 2*1024*1024; 
    const stats = fs.statSync(filename)

    if (stats.size > limit) {
        console.log(`File size exceeds the limit of ${limit} bytes.`);
    }
    else{
        console.log(`File size is within the limit of ${limit} bytes.`);
    }
}
sizechecker("notes.txt")
