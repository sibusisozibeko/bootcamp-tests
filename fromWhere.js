var fromWhere = function(regnum){
  switch(regnum){
    case "CY":
      return "Bellville";
    case "CJ":
      return "Paarl";
    case "CA":
      return "Cape Town";
    default:
     return "Some other place!";
   }
};
var bus = fromWhere("Paarl");
console.log(bus);
