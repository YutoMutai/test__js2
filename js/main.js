function leapyear(year) {
  if ((year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)) {return true}
return false
}
if(LeapYear(2020)){
  console.log(2020 + '年はうるう年です');
}else{
  console.log(2020 + '年はうるう年ではありません');
}
if(LeapYear(2021)){
  console.log(2021 + '年はうるう年です');
}else{
  console.log(2021 + '年はうるう年ではありません');
}