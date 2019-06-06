function setup() {
  print(metersToKilo(10));
  print(metersToMiles(10));
  console.log(metersToMarathon(1));
}

function metersToKilo(kilo) {
  return kilo * 1000;
}

function metersToMiles(miles) {
  return miles * 1609.34;
}

function metersToMarathon(marathon) {
  return marathon * 42195;
}