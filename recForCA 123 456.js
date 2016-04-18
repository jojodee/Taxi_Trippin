module.exports = function(platesData,specificPlates){

var platesNeeded = platesData.filter(function(taxis){
  return taxis.RegistrationNumber === specificPlates;
});
return platesNeeded;

};
