const createdAnagramList = (anagramsWord, callback)=> {
    // const testArray = [anagramsWord];
    const tmpVar = anagramsWord.split('');
    console.log(tmpVar);
    console.log(allPossibleCases(tmpVar));


    callback([1,2,3,4,5,6])
}


function allPossibleCases(arr) {
    if (arr.length === 0) {
      return [];
    } 
  else if (arr.length ===1){
  return arr[0];
  }
  else {
      var result = [];
      var allCasesOfRest = allPossibleCases(arr.slice(1));  // recur with the rest of array
      for (var c in allCasesOfRest) {
        for (var i = 0; i < arr[0].length; i++) {
          result.push(arr[0][i] + allCasesOfRest[c]);
        }
      }
      return result;
    }
  
  };


module.exports = {
    createdAnagramList
}