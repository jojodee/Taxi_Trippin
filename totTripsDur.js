module.exports = function(dataDurban){
  var totalTrips = 0;
  dataDurban.forEach(function(taxiTrip){
    totalTrips += (taxiTrip.Trips);
  })
  console.log(totalTrips);
  return totalTrips;
}
