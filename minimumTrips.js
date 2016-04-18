module.exports = function(numbrTrips){
  var trips = [];
 numbrTrips.forEach(function(obj){
   trips.push(obj.Trips);
 });

 miniTrips = Math.min.apply(null,trips);

return miniTrips;
}
