function getuser(id, callback){
    setTimeout(() => {
        console.log("User fetched");
        const user = {
            id: 111,
            name: "Abhi"
        }
        callback(null, user);
    }, 1000);
}
function getprofile(id, callback){
    setTimeout(() => {
        console.log("User fetched");
        const profile = {
            username: "Abhi",
            location: "India"
        }
        callback(null, profile);
    }, 1000);
}
function getposts(id, callback){
    setTimeout(() => {
        console.log("Posts fetched");
        const posts = ["post1", "post2", "post3"];
        callback(null, posts);
    }, 1000);
}  
getuser(1, function(error, user) {
    if (error) {
        console.error(error);
        return;
    }
    console.log(user.id, function(error, profile) {
        if (error) {
            console.error(error);
            return;
        }
        getposts(user.id, function(error, posts) {
            if (error) {
                console.error(error);
                return;
            }
            console.log(`Fetched Posts ${posts}`);
        });
    });
});