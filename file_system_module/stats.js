const fs = require('fs')

fs.stat("notes.txt", (err, stats) => {
  if (err) {
    console.error(err)
    return
  }
  console.log("Information about notes.txt:", stats)
  console.log("Size of the file:", stats.size, "bytes")
  console.log("creation time:", stats.birthtime.toISOString().split('T')[0])
  console.log("last modified time:", stats.mtime.toISOString().split('T')[0])
})