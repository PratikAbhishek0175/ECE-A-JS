const fs = require('fs')
fs.mkdir("./myFolder1/myFolder2/myFolder3", { recursive: true }, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log("Folder created successfully")
  }
})
fs.writeFile("./myFolder/hello.txt", "Hello, World!", (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("File created successfully")
    }
})
fs.readdir("./myFolder", (err, files) => {
    if (err) {
        console.log(err)
        return
    }
    console.log("Directory Content:",files);
})