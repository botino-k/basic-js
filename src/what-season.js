const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
 /* if (!(typeof date.getMonth === "function")) throw new Error("Invalid date!");*/
  if(!(date instanceof Date) || typeof(date) !== "object" || Object.keys(date).length > 0) {throw new Error('Invalid date!'); }
  
  if ([11, 0, 1].includes(date.getMonth())) {return "winter";
  } else if ([2, 3, 4].includes(date.getMonth())) {return "spring";
  } else if ([5, 6, 7].includes(date.getMonth())) {return "summer";
  } else  return "autumn";
  
  
}
module.exports = {
  getSeason
};
