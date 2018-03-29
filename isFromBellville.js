var isFromBellville = function(sbu){
  var car = sbu.startsWith("CY");
  return car;
};
  var project = isFromBellville("CY 45 78dff");
  console.log(project);
