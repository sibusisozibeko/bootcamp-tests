var yearsAgo = function(year){
 const years = new Date(); // 2018
  var nyaka = years.getFullYear();
  return nyaka - year;
}
var getFullYear = yearsAgo(1989);
 console.log(getFullYear);
