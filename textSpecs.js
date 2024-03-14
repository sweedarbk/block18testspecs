// Unit Tests Specs -  Expect [action] to be result.
Unit Tests 
1. A function called "multiplication" that returns the product of the two input numbers.
  Expect [multiplication(num1, num2)] to be a number 
  Expect [multiplication(a string input, num)] to be an error 
  Expect [multiplication(a string input, a string input)] to be an error
  Expect [multiplication(no input, no input)] to be an error

2. A function called "concatOdds" takes two arrays of integers as arguments. 
It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.
  Expect function concatOdds() {
    const newArray = array1.concat(array2);
    create an empty const concatOdds array, run a for loop
    through the newArray to return only odd values and assign results to 
    concatOdds empty array.}

  Expect [either inital array has a string] will return an error.
  Expect [wrong formula used in for loop] will return incorrect values to concatOdds
  Expect [array is not sorted in order] to be an out of order array
  Expect [multiple inputs of the same value] to only return the value once instead of multiple times

// Functional test specs - more natural wording.
1. A shopping cart checkout feature that allows a user to check out as
 a guest (without an account), or as a logged-in user. They should be 
 allowed to do either, but should be asked if they want to create an 
 account or log in if they check out as a guest.

-  If the cart is empty, an error message saying "Please add items before checking out" should display.
-  As the user rings up each item, the display should show the price of the item as well as the updated total amount.
-  If the user chosses to log in, they should be directed to a login page asking for their username and password
-  The user should be given an option for "forgot password" in case they forget their password
-  If they enter the incorrect password too many times, the account should either be locked for security or they
   should be given an option to reset their password
-  If they choose to create an account, they should be directed to a page to create a username and password
-  In the create account page, the website should dictate if the username/password is case-sensitive.A
-  In the create account page, the website should list necessary parameters for creating a password
   (requires one number, one uppercase letter, one symbol)
-  The website should detect if the user inputs an invalid character and return an error message.
-  If the checkout process is abandoned or left inactive for more than 3 minutes, the program will default back
   to the original home page (in case the customer left)
-  If the user chooses to checkout as guest, they should be directed to a page to pay for the items (enter billing, shipping, and payment details.)
-  If the user's payment method is declined, there should be an error message saying payment declined, use alternative payment method.
-  If the user inputs an invalid shipping or billing address, an error message should appear askng them to input a valid mailing / billing address.
