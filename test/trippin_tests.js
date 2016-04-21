
var trippin = require('../trippin');
var minimumTrips = require('../minimumTrips');
var recForCa123565 = require('../recForCA 123 456.js')
var tripsNum = require('../tripsNum');
 var assert = require('assert');


 var capeTownTaxis = [
   {
   "RegistrationNumber": "CA 123 456",
   "Route": "Cape Town - Bellville",
   "Fare": 13,
   "Trips": 9
 }, {
   "RegistrationNumber": "CA 234 567",
   "Route": "Cape Town - Gugulethu",
   "Fare": 12,
   "Trips": 11
 }, {
   "RegistrationNumber": "CA 123 456",
   "Route": "Cape Town - Gugulethu",
  "Fare": 12,
  "Trips": 11
 }, {
   "RegistrationNumber": "CA 345 678",
   "Route": "Cape Town - Langa",
   "Fare": 8,
   "Trips": 13
 }, {
   "RegistrationNumber": "CA 345 678",
   "Route": "Cape Town - Cape Town",
   "Fare": 13,
   "Trips": 10
 }
];

 describe("For processing the data for the taxi drivers,", function() {

        it("should find the total trips ", function() {

          var result = trippin(capeTownTaxis);

        assert.equal(54, result);
    });
 });


describe('Taxi data', function(){
  it('should give the least number of trips',function(){
    var result = minimumTrips(capeTownTaxis);
    assert.equal(result, 9);
  });
})

describe('taxi plates records', function(){
  it('should look for specific plates', function(){
    var myres = [
      {
    "RegistrationNumber": "CA 123 456",
    "Route": "Cape Town - Bellville",
    "Fare": 13,"Trips": 9
},
  {
    "RegistrationNumber": "CA 123 456",
    "Route": "Cape Town - Gugulethu",
    "Fare": 12,
    "Trips": 11
  }

];
    var results = recForCa123565(capeTownTaxis,"CA 123 456");
    assert.deepEqual(results,myres);
  });
})
describe('Data on the number of trips', function(){
  it('should return the total trips by a specific vehicle',function(){
    var results = tripsNum(capeTownTaxis,"CA 234 567");
    assert.equal(results,  11);
  });
});
