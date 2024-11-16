const fs = require('fs');

// reading test async
fs.readFile('./Read/read.txt', 'utf-8', (err, data) => {
    if (err) {
      throw Error("Error reading the file:", err);
    }
   // console.log("File content:", data);

    fs.writeFile('./Read/read-2.txt', data, 'utf-8', (err)=>{
        if(err){
            throw Error ('error writeing data')
        }
    })
  });
  

  console.log('testing async');