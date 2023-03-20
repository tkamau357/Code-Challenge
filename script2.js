//we first use the parseInt() function to convert the user input 
//(which is initially a string) to an integer.
let speed = parseInt(prompt("Enter car speed (in km/h):"));

//We use an if statement to check if the speed is less than 70. 
//If it is, we output "Ok" using console.log().
if (speed <= 70) {
console.log("Ok");

//Calculate the demerit points 

} else {
    let points = Math.floor((speed - 70) / 5);
    if (points > 12) {
    console.log("License suspended");
    } else {
    console.log("Points: " + points);
    }
}