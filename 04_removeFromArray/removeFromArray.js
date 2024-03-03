// The commented code works, however it is very messy. I made an improved version at the bottom.

// const removeFromArray = function (array, ...elementsToRemove) {
//   let result = [];
//   function isAnElementToRemove(element, arrayRemoval) {
//     for (const items of arrayRemoval) {
//       if (element === items) {
//         return true;
//       }
//     }
//     return false;
//   }

//   for (const element of array) {
//     if (isAnElementToRemove(element, elementsToRemove)) {
//       continue;
//     }

//     result.push(element);
//   }
//   return result;
// };

/* The below function has a Rest Parameter (indicated with '...'), which is
a way for the function to accept infinitely many, but optional arguments. This is done by populating an array of the same name as the Rest Parameter, from which we can then perform any array methods. This is a syntax created to remove the need of a previous way of turning a function's parameters into an array (look up MDN on the 'arguments object' and 'rest parameters'). Rest Parameters must always be the last parameter of a function.
*/

const removeFromArray = function (array, ...elementsToRemove) {
  let result = array.filter((currentElement) => {
    for (const elementToRemove of elementsToRemove) {
      if (currentElement === elementToRemove) return;
    }

    return currentElement;
  });

  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
