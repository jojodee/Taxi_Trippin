module.exports = function(tripsData){
  var trips = 0;
tripsData.forEach(function(obj){
trips += (obj.Trips);
 });
 console.log(trips);
return trips;
}
