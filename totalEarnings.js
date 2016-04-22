module.exports = function(fares,taxi){
  earnings = 0;
  fares.forEach(function(name){
    if(name.RegistrationNumber===taxi){
    earnings +=(name.Trips*name.Fare);
    }
  })
  return earnings;
  console.log(earnings);
}
