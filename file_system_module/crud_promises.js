import fs from 'fs/promises'

async function readFileContent(filename){
    const data = await fs.readFile(filename, "utf8")
    console.log(`read data: ${data}`)
} 
readFileContent("notes.txt")