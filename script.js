document.addEventListener('DOMContentLoaded', function() {
//////////////////////////////////////////////////////////////////////////
  var longAFArray = [11, 52, 1, 53, 22, 26, 2, 44, 2, 23, 17, 87, 102, 68, 434, 634, 53, 113, 3822, 57, 27, 58, 3333, 123123123123123, 40];
  var longAFString = "supercalifragilisticexpialidocious";
  // Write your JavaScript below to gather the information needed to complete the sentences in the HTML.

  console.log(longAFArray.length);
  console.log(longAFArray[0]);
  console.log(longAFArray[18]);
  console.log(longAFArray[11]);
  console.log(longAFArray[15]);
  console.log(longAFArray.indexOf(3333));

  console.log("string index 0 is ", longAFString[0]);
  console.log("string index 28 is ", longAFString[28]);
  console.log("12th character is ", longAFString[11]);
  console.log("20th character is ", longAFString[19]);
  console.log(longAFString.indexOf("expi"));


})