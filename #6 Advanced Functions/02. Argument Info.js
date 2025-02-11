function displayArguments(...arguments) {
  let resultObj = {};
  for (const element of arguments) {
    let type = typeof element;
    console.log(`${type}: ${element}`);
    if (!resultObj.hasOwnProperty(type)) {
      resultObj[type] = 0;
    }
    resultObj[type] += 1;
  }
  for (const key in resultObj) {
  }
  let sorted = Object.entries(resultObj).sort(
    (arr1, arr2) => arr2[1] - arr1[1]
  );
  sorted.forEach(([k, v]) => {
    console.log(`${k} = ${v}`);
  });
}

displayArguments(
  "cat",
  42,
  function () {
    console.log("Hello world!");
  },
  function () {
    console.log("Hello world!");
  }
);
