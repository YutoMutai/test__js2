function leapyear(year) {
  if ((year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)) { return true; }
  return false;
}
let checkyear = 2020
if(leapyear(checkyear)){
  console.log(checkyear + '年はうるう年です');
}else{
  console.log(checkyear+ '年はうるう年ではありません');
}
let checkyear2 = 2021
if(leapyear(checkyear2)){
  console.log(checkyear2 + '年はうるう年です');
}else{
  console.log(checkyear2 + '年はうるう年ではありません');
}