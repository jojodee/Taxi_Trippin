var trippin = require('../trippin');
var minimumTrips = require('../minimumTrips');
var recForCa123565 = require('../recForCA 123 456.js');
var tripsNum = require('../tripsNum');
var routeNames = require('../routeNames');;
var totalEarnings = require('../totalEarnings');
var totalEarningsPerTaxi = require('../totalEarningsPerTaxi');
var assert = require('assert');


var capeTownTaxis = [{
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
}];

describe("For processing the data for the taxi drivers,", function() {

  it("should find the total trips ", function() {

    var result = trippin(capeTownTaxis);

    assert.equal(54, result);
  });
});


describe('Taxi data', function() {
  it('should give the least number of trips', function() {
    var result = minimumTrips(capeTownTaxis);
    assert.equal(result, 9);
  });
})

describe('taxi plates records', function() {
  it('should look for specific plates', function() {
    var myres = [{
        "RegistrationNumber": "CA 123 456",
        "Route": "Cape Town - Bellville",
        "Fare": 13,
        "Trips": 9
      }, {
        "RegistrationNumber": "CA 123 456",
        "Route": "Cape Town - Gugulethu",
        "Fare": 12,
        "Trips": 11
      }

    ];
    var results = recForCa123565(capeTownTaxis, "CA 123 456");
    assert.deepEqual(results, myres);
  });
})
describe('Data on the number of trips', function() {
  it('should return the total trips by a specific vehicle', function() {
    var results = tripsNum(capeTownTaxis, "CA 234 567");
    assert.equal(results, 11);
  });
});

describe('routes by taxis', function() {
  it('should return route names taken by a taxi', function() {


    var rou = ["Cape Town - Langa", "Cape Town - Cape Town"];
    var result = routeNames(capeTownTaxis, 'CA 345 678')
    assert.deepEqual(result, rou);
  });
});

describe('taxi earnings', function() {
  it('should return earnings by a taxi', function() {
    var a = "CA 234 567";
    var result = totalEarnings(capeTownTaxis, a);
    assert.equal(result, 132);
  });
});
describe('earnings data', function() {
  it('should return  total earnings by each taxi', function() {
    var eachTaxiEarnings = "CA 123 456 = 249, CA 234 567 = 132, CA 345 678 = 234";
    var result = totalEarningsPerTaxi(capeTownTaxis, taxiEarnings);
    assert.deepEqual(result, eachTaxiEarnings);
  })
})
