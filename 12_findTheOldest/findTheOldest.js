const findTheOldest = function (people) {
  const oldest = people.reduce((oldest, current) => {
    const oldestAge = getAge(oldest);
    const currentAge = getAge(current);

    if (oldestAge > currentAge) {
      return oldest;
    } else return current;
  });

  return oldest;
};

function getAge(person) {
  if (!person.yearOfDeath) {
    const currentAge = 2024 - person.yearOfBirth;
    return currentAge;
  }
  return person.yearOfDeath - person.yearOfBirth;
}

// const people = [
//   {
//     name: "Carly",
//     yearOfBirth: 1942,
//     yearOfDeath: 1970,
//   },
//   {
//     name: "Ray",
//     yearOfBirth: 1962,
//     yearOfDeath: 2011,
//   },
//   {
//     name: "Jane",
//     yearOfBirth: 1912,
//     yearOfDeath: 1941,
//   },
// ];

// let result = findTheOldest(people);
// console.log(result);

// Do not edit below this line
module.exports = findTheOldest;
