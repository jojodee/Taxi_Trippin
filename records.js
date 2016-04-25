module.exports = function(platesData,specificPlates){

var platesNeeded = platesData.filter(function(taxis){
  return taxis.RegistrationNumber === specificPlates;
});
console.log(platesNeeded);
return platesNeeded;

};
