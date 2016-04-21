module.exports = function(theTaxiData,regNum){
var records = 0;
  theTaxiData.forEach(function(reg){
    if(reg.RegistrationNumber === regNum) {
      records += reg.Trips;
    }
  });
  console.log(records);
return records;
}
