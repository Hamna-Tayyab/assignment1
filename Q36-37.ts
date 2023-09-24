// Question 36
function make_shirt( size:number, message:string): void{
    console.log(`Shirt Size:${size},  message: ${message}`);
    
}
make_shirt(32, "I love to wear T-shirts!")

// Question 37
function make_shirtupdated(size:string = "Large", message : string =  "I Love Typescript!"): any{
    console.log(`Shirt Size: ${size}, message: ${message}`);
    
}
make_shirtupdated();
make_shirtupdated("Medium");
make_shirtupdated("Small", "You are Awesome!")