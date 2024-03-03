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

const removeFromArray = function (array, ...elementsToRemove) {
  let result = array.filter((currentElement) => {
    for (const elementToRemove of elementsToRemove) {
      if (currentElement === elementToRemove) {
        return;
      }
    }
    return currentElement;
  });

  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
