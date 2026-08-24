// const promise1 = new Promise((resolve, reject) =>{
//     let success = true;
//     if(success){
//         resolve({
//             id: 111,
//             username: "Abhi"
//         })
//     }else{
//         reject(new Error("Data not found"));
//     }
// })

// promise1
// .then(responses => {
//     console.log(responses);
// })
// .catch(error => {
//     console.log(error);
// })
// const promise2 = new Promise((resolve, reject) =>{
//     let success = true;
//     if(success){
//         resolve({
//             id: 101,
//             username: "Abhishek"
//         })
//     }else{
//         reject(new Error("order not fetched"));
//     }
// })

// Promise.any([promise1, promise2])
// .then(responses => {
//     console.log(responses);
// })
// .catch(error => {
//     console.log(error);
// })


function fethUserData(){ 
return new Promise((resolve, reject) =>{
    let success = true;
    if(success){
        resolve({
            id: 111,
            username: "Abhi"
        })
    }else{
        reject(new Error("Data not found"));
    }
})
}
async function getUser(){
    try{
        const user = await fethUserData();
        console.log(user);
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}
getUser();