let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
      break;
  case 1:
    day = "Monday";
      break;
  case 2:
    day = "Tuesday";
      break;  
  case 3:
    day = "Wednesday";
      break;
  case 4:
    day = "Thursday";
      break; 
  case 5:
    day = "Friday";
      break;
  case 6:
    day = "Saturday";
      break;              
}
console.log(day);

var answer = "";
function planets(val) {
  switch(val) {
    case 1:
      return "moon";
      break;
    case 2:
      return "mars";
      break;
  }
  return answer;
}
console.log(answer)