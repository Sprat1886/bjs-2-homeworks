function compareArrays(arr1, arr2) {
  const checkElements = arr1.every((element, index) => element === arr2[index]);
  const checkLength = arr1.length === arr2.length;
  return checkElements && checkLength;
}

function getUsersNamesInAgeRange(users, gender) {
  return users
    .filter((element) => element.gender === gender)
    .reduce((acc, element, index, arr) => {
      acc += element.age;
      if (index >= arr.length - 1) {
        return acc / arr.length;
      } else {
        return acc;
      }
    }, 0);
}
