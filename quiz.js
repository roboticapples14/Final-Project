var Business_Management = 0;
var Nursing = 0;
var Psychology = 0;
var MedicalAssistant = 0;
var CriminalJustice = 0;
var Education = 0;
var Engineering = 0;
var Finance_Accounting = 0;
var Communications_Journalism = 0;
var VisualArts = 0;
var Mechanics_Repair = 0;
var English = 0;
var Mathematics = 0;
var Film_Video_Photography = 0;
var Biology = 0;
var International_Relations = 0;
var Computer_Science = 0;

function Q1(sM20, sM10,sM0) {
  var A = document.getElementsById('sM20');
  var B = document.getElementsById('sM10');
  var C = document.getElementsById('sM0');

  if A.checked  {
    Business_Management = Business_Management + A.value;
    Nursing_Total = Nursing + A.value;
    MedicalAssistant = MedicalAssistant + A.value;
    CriminalJustice = CriminalJustice + A.value;
    International_Relations = International_Relations + A.value;
  } Else if B.checked {
    Business_Management = Business_Management + B.value;
    Nursing = Nursing + B.value;
    MedicalAssistant = MedicalAssistant + B.value;
    CriminalJustice = CriminalJustice + B.value;
    International_Relations = International_Relations + B.value;
  }
return Nursing_Total;
}

function Q2() {
  // var dS = document.getElementsById('dS');
  // for(var i = 0; i < dS.length; i++){
  //   if(dS[i].checked){
  //     Business_Management += dS[i].value;
  //     CriminalJustice += dS[i].value;
  //     Engineering += dS[i].value;
  //     Finance_Accounting += dS[i].value;
  //     VisualArts += dS[i].value;
  //     Biology += dS[i].value;
  //     Computer_Science += dS[i].value;
  //     document.write("yes")}
  //   else {
      document.write("No");
    }
}
}

function Q3() {
  var pS = document.getElementsById('pS');
  for(var i = 0; i < pS.length; i++){
    if(pS[i].checked){
      Business_Management += pS[i].value;
      CriminalJustice += pS[i].value;
      Engineering += pS[i].value;
      Finance_Accounting += pS[i].value;
      Nursing += pS[i].value;
      Psychology += pS[i].value;
      Biology += pS[i].value;
      Biology += pS[i].value;
      Biology += pS[i].value;
      Computer_Science += pS[i].value;  }
}
}


//Makes it print value of Nursing (before updating/adding value)
function produceMessage(){
  document.write(Q1());
}

function submit(Q2()) {
  Q2()
}

function tester(test) {
  document.write(test);
}

// function submit(Nursing_Total,Q1()) {
//   document.write(Q1());
}
