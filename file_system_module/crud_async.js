const fs = require('fs')

fs.writeFile("notes.txt", "ECE-A", (err) => {
  if (err){
    console.log(err)
  }
  console.log("File written successfully")
})

fs.readFile("notes.txt", "utf-8", (err, data) => {
  if (err){
    console.log(err)
  }
  console.log(`read data: ${data}`)
})
fs.appendFile("notes.txt", "ECE-B", (err) => {
  if (err){
    console.log(err)
  }
  console.log("File appended successfully")
})
fs.rm("notes.txt", (err) => {
  if (err){
    console.log(err)
  }
  console.log("File removed successfully")
})