const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  n= n.toString()
 let arr = Array.from(n)
 let minNum = Math.min(...arr)
 let indexOfMin = arr.indexOf(minNum.toString())
 if (arr[0]>=arr[1]){
arr.splice(indexOfMin,1)
}else {arr.shift()}


return (+arr.join(''))

}
//deleteDigit( 351)
module.exports = {
  deleteDigit
};
