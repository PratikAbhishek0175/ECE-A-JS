import fs from 'fs'

const readStream = fs.createReadStream("input.txt", {encoding: "utf-8"})
readStream.on("data", (chunk) => {
    console.log("Data Received: ");
    console.log("Data: ", chunk)
});
readStream.on("end", () => {
    console.log("Stream Ended")
});
readStream.on("error", (error)=>{
    console.log("Error: ", error.message)
});

const writeStream = fs.createWriteStream("output.txt")
writeStream.write("Hello\n")

writeStream.on("finish", () => {
    console.log("Write Stream Finished")
})
writeStream.on("error", (error) => {
    console.log("Error: ", error)
})
readStream.pipe(writeStream)