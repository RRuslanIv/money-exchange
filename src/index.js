// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var obj = {
    "H": 50,
    "Q": 25,
    "D": 10,
    "N": 5,
    "P": 1
  }
  var result = {}
  for (let key in obj) {
    if (currency > 10000) {
        result["error"] = "You are rich, my friend! We don't have so much coins for exchange"
      } else {
        var totalDiff = Math.floor(currency / obj[key])
    	  if (totalDiff >= 1) {
         result[key] = totalDiff + ''
         result[key].split('.')[0]
         currency -= (totalDiff*obj[key])
    	  } 
        }
  }
  return result
}
