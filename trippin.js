module.exports = function(capeTownTaxis){
  var trips = 0;
capeTownTaxis.forEach(function(obj){
trips += (obj.Trips);
 });
return trips;
}
