/* Note: The Math.sqrt() function returns the square root of
     the provided number (given as a parameter) */

/* Uncomment the below instruction for the
     debugger to pause execution of all JavaScript */
debugger;

/* (1) Rename these identifiers to label what the function
         is doing and what the variables are holding
   (2) Add a comment above the function describing what it does

   Note: This is the Pythagorean theorem */

   //pythag + sqrt
function pythagoreanTheorem(num1,num2)
{
	let sum = (num1 * num1) + (num2 * num2);
	let sqrt = Math.sqrt(sum);
	return sqrt;
}

/* (3) Add Single Line Comments after each of the three
     instructions below to tell us what each "w" value
     is inside the method being called */

// adds value to variables
console.log(pythagoreanTheorem(3, 4)); //w = 25
console.log(pythagoreanTheorem(7, 21)); // w = 490
console.log(pythagoreanTheorem(17, 14)); // w = 485

// This is an example of what the above lines should look like
console.log(z(10, 5)); // w = 125