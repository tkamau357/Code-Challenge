//In this program, we first use the parseInt() function to convert the user input (which is initially a string) to an integer.
//Using the prompt function, it prompts the user to enter a number and stores it in the marks variable.
let marks = parseInt(prompt("Enter student's marks (between 0 and 100):"));

//Then we use a series of if and else if statements to check the value of the marks variable 
//and output the corresponding grade using console.log().
if (marks > 79) {
  console.log("Grade: A");
} else if (marks >= 60 && marks <= 79) {
  console.log("Grade: B");
} else if (marks >= 50 && marks <= 59) {
  console.log("Grade: C");
  } else if (marks >= 40 && marks <= 49) {
  console.log("Grade: D");
  } else {
  console.log("Grade: E");
}