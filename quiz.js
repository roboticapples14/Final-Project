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

function Q1() {
  var sM = document.getElementsById('sM');
  for(var i = 0; i < sM.length; i++){
    if(sM[i].checked){
      Business_Management += sM[i].value;
      Nursing += sM[i].value;
      MedicalAssistant += sM[i].value;
      CriminalJustice += sM[i].value;
      International_Relations += sM[i].value;  }

}
}

function Q2() {
  var dS = document.getElementsById('dS');
  for(var i = 0; i < dS.length; i++){
    if(dS[i].checked){
      Business_Management += dS[i].value;
      CriminalJustice += dS[i].value;
      Engineering += dS[i].value;
      Finance_Accounting += dS[i].value;
      VisualArts += dS[i].value;
      Biology += dS[i].value;
      Computer_Science += dS[i].value;  }
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


function submit() {
  Q1();
  Q2();
  return Nursing;
}

//Makes it print value of Nursing (before updating/adding value)
function produceMessage(){
    return Nursing;
}
