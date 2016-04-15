
var trippin = require('../trippin');
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
