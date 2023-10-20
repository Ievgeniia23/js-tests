'use strict';
/*function makeTransaction(quantity, pricePerDroid) {
    return `You ordered ${quantity} droids worth ${quantity * pricePerDroid} credits!`;

}
console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"
*/

/*function checkAge(age) {
        
      if (age >= 18) {
        return "You are an adult";
      }
    }
    console.log(checkAge(18));  */


    /*function checkStorage(available, ordered) {

        if (ordered > available) {
          return "Not enough goods in stock!";
        } 
        else {
          return "Order is processed, our manager will contact you";
        }
      }

      console.log(checkStorage(100, 50)); */



      function checkStorage(available, ordered) {
        if (ordered === 0) {
          return "There are no products in the order!";
        } 
          else if (ordered > available) {
            return "Your order is too large, there are not enough items in stock!";
         
          }
          else {
            return "The order is accepted, our manager will contact you";
          }
        }
        console.log(checkStorage(100, 150));

        function checkPassword(password) {
            const correctPassword = "jqueryismyjam";
            const checkPassword = password  = correctPassword ? "Access granted" : "Access denied, wrong password!"
          }
          