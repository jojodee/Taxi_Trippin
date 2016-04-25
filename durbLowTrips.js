module.exports = function(durbanTaxiData){
  var minTrips = [];
  durbanTaxiData.forEach(function(taxis){
  minTrips.push(taxis.Trips)
  })
  lowest  = Math.min.apply(null,minTrips);
  console.log(lowest);
  return lowest;
}
