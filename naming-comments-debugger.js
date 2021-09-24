/* Note: The Math.sqrt() function returns the square root of
     the provided number (given as a parameter) */

/* Uncomment the below instruction for the
     debugger to pause execution of all JavaScript */
// debugger;

/* (1) Rename these identifiers to label what the function
         is doing and what the variables are holding
   (2) Add a comment above the function describing what it does

   Note: This is the Pythagorean theorem */
function z(y,x)
{
	let w = (y * y) + (x * x);
	let v = Math.sqrt(w);
	return v;
}

/* (3) Add Single Line Comments after each of the three
     instructions below to tell us what each "w" value
     is inside the method being called */
console.log(z(3, 4));
console.log(z(7, 21));
console.log(z(17, 14));

// This is an example of what the above lines should look like
console.log(z(10, 5)); // w = 125