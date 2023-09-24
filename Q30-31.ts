
const usernames:string[] = ["Danial", "Lina", "Admin", "Musa", "Maryam"];

 if( usernames.length === 0){
    console.log("we need to find some users!");
 } else{
    for( let i = 0; i < usernames.length; i++){
        const username:string = usernames[i];
        if(username === "Admin"){
            console.log(`Hello ${username}, would you like to see a status report?`);
        } else{
            console.log(`Hello ${username}, thank you for logging again.`)
        }
    }
 }