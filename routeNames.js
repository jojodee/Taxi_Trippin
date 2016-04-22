module.exports = function(taxiRoutes,plates){
var routes = [];
taxiRoutes.filter(function(name){
if(name.RegistrationNumber === plates){
  routes.push(name.Route);
console.log(routes);
    }

  });
  return routes;
}
