module.exports = function(faresInfo) {
  var tripCounts = {};


  faresInfo.forEach(function(trip) {

    var taxi = trip.RegistrationNumber,
      earnings = trip.Fare * trip.Trips;

    if (tripCounts[taxi] === undefined) {
      tripCounts[taxi] = 0;
    }

    tripCounts[taxi] = tripCounts[taxi] + earnings;

  });
console.log(tripCounts);
  return tripCounts;

}
