module.exports = function(faresInfo,taxi){
  var eachTaxi = 0;
  faresInfo.filter(function(obj){
    eachTaxi += (obj.Trips*obj.Fare);
    });
}
