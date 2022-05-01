const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  /*let copy = [];
  members.forEach(elem=> { if (typeof elem== "string" )  {copy.push(elem);}}, );
  let d=copy.map(el => el.trim().charAt(0).toUpperCase()).sort().join('');

  return d;*/

  if (Array.isArray(members)) {
    let copy = [];
    members.forEach(elem=> { if (typeof elem== "string" )  {copy.push(elem);}}, )
    let r= copy.map(el => el.trim().charAt(0).toUpperCase()).sort().join('')
    
    return r;
    } else {return false}
    
 
}

module.exports = {
  createDreamTeam
};
