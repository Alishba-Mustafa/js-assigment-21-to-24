//Java Script Assigment 
//Chapter 21 to 25
//Q1: Write a program that takes two user inputs for first and 
//last name using prompt and merge them in a new variable 
//titled fullName. Greet the user using his full name.

let firstname = prompt("Enter your first name:");
let lastname = prompt("Enter your last name:");
let fullname = (firstname+lastname);
alert( "Hello"+fullname);

//Q2: Write a program to take a user input about his favourite 
//mobile phone model. Find and display the length of user 
//input in your browser.

let favoritePhone = prompt("What is your favorite mobile phone model?");
document.write("my favourite phone is :"+favoritePhone,"<br>");
document.write("lenght of string is:"+favoritePhone.length,"<br>");

//Q3: Write a program to find the index of letter “n” in the word
//“Pakistani” and display the result in your browser.

let word = "Pakistani";
let index = word.indexOf('n');
document.write("string: Pakistani");
document.write("Index of 'n': "+index);

//Q4: Write a program to find the last index of letter “l” in the 
//word “Hello World” and display the result in your browser.

let Greet = "Hello World";
let lastIndex = Greet.lastIndexOf('l');
document.write("string: Hello World","<br>");
document.write("Last index of 'l': "+lastIndex);

//Q5: Write a program to find the character at 3rd index in the 
//word “Pakistani” and display the result in your browser.

let city = "Pakistani";
let charAtIndex = city.charAt(3);
document.write("Character at index 3: "+charAtIndex);

//Q6: Repeat Q1 using string concat() method.

let firstname = prompt("Enter your first name:");
let lastname = prompt("Enter your last name:");
let fullname = firstname.concat(lastname);
alert("Hello,"+fullname);

//Q7: Write a program to replace the “Hyder” to “Islam” in the 
//word “Hyderabad” and display the result in your browser.

let city = "Hyderabad";
document.write("city: "+city,"<br>");
let updatedCity = city.replace("Hyder", "Islam");
document.write("After replecment: " + updatedCity);

//Q8: Write a program to replace all occurrences of “and” in the
//string with “&” and display the result in your browser.
let message = "Ali and Sami are best friends. They play cricket and football together.";
let updatedMessage = message.replaceAll("and", "&");
document.write(updatedMessage);

//Q9: Write a program that converts a string “472” to a number 
//472. Display the values & types in your browser

let str = "472";
let num = Number(str);
document.write("Value: " + str + "<br>Type: String<br>");
document.write("Value: " + num + "<br>Type: Number");

//Q10: Write a program that takes user input. Convert and 
//show the input in capital letters.

let Input = prompt("Enter some text:");
document.write("user input: ",Input,"<br>");
document.write("Upper case: ",Input.toUpperCase());

//Q12: Write a program that converts the variable num to 
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

let num = 35.36;
let str = num.toString().replace(".", "");
document.write("Number",num);
document.write("Result: " + str);

//Q13:  Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of [@ .

let username = prompt("Enter your username:");
if (prompt="[@ . , !]") {
    alert("Please enter a valid username without special symbols[@.,!]");
}
//Q14: . You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array. After searching, prompt the user whether the given 
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user 
// enters cookie, Cookie, COOKIE or coOkIE, program 
// should inform about its availability. Example:

let items = ["cake", "apple pie", "cookie", "chips", "patties"];
let searchItem = prompt("What do you want to search for?").toLowerCase();
if (items.includes(searchItem)) {
    alert(searchItem + " is available.");
} else {
    alert(searchItem + " is not available.");
}

//Q15: Write a program to take password as an input from 
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

let password = prompt("Enter your password:");
if (password.length < 6 || !/[a-zA-Z]/.test(password) || !/\d/.test(password) || /^\d/.test(password)) {
    alert("Password must contain letters and numbers, not start with a number, and be at least 6 characters long.");
} else {
    alert("Password is valid.");
}
//Q16: Write a program to convert the following string to an 
// array using string split method.

let university = "University of Karachi";
let arr = university.split("");
for (let i = 0; i < arr.length; i++) {
    document.write(arr[i] + "<br>");
}

//Q17: Write a program to display the last character of a user 
// input.

let user = prompt("Enter some text:");
document.write("Last character: " + user.charAt(userInput.length - 1));

//Q18 : You have a string “The quick brown fox jumps over the 
// lazy dog”. Write a program to count number of 
// occurrences of word “the” in given string.

let text = "The quick brown fox jumps over the lazy dog";
let count = text.toLowerCase().split("the").length - 1;
document.write("Occurrences of 'the': " + count);


