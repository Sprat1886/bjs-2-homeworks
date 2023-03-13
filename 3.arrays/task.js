function compareArrays(arr1, arr2) {
  const checkArr1 = arr1.every((element, index) => element === arr2[index]);
  const checkArr2 = arr2.every((element, index) => element === arr1[index]);
  return checkArr1 && checkArr2;
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
