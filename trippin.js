module.exports = function(tripsData){
  var trips = 0;
tripsData.forEach(function(obj){
trips += (obj.Trips);
 });
return trips;
}
