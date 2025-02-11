function sortArray(array,arg){
   let result = arg === 'asc' ? array.sort((a,b) => a-b) : array.sort((a,b) => b-a);
  return result;
}

console.log(sortArray([14, 7, 17, 6, 8], 'desc'));


