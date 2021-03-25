/*
function calcLengthStand() {
    let ringSegments = document.getElementById("segments").value;
    let cutAngleDeg = (360 / (2 * ringSegments));
    let cutAngleRad = ((Math.PI * cutAngleDeg) / 180);
    let ringDiameterI = document.getElementById("inchesDia").value;
    let ringDiameterF = document.getElementById("fracDia").value;
    let ringDiameterStd = ringDiameterI + ringDiameterF;
    let stopLengthStd = ringDiameterStd * Math.sin(cutAngleRad);
    document.getElementById("ansDisplayStd").innerHTML = stopLengthStd.toFixed(3) + '(thousandths)';
    document.getElementById("fenceAngleStd").innerHTML = cutAngleDeg.toFixed(3) + "&#176";
}

function calcLengthMet() {
    let ringSegments = document.getElementById("segments").value;
    let cutAngleDeg = (360 / (2 * ringSegments));
    let cutAngleRad = ((Math.PI * cutAngleDeg) / 180);
    let ringDiameterC = document.getElementById("cmDia").value;
    let ringDiameterM = document.getElementById("mmDia").value;
    let ringDiameterMet = ringDiameterC + ringDiameterM;
    let stopLengthMet = ringDiameterMet * Math.sin(cutAngleRad);
    document.getElementById("ansDisplayMet").innerHTML = 'Your stop should be ' + stopLengthMet.toFixed(3) + ' inches from the blade.';
    document.getElementById("fenceAngleMet").innerHTML = 'Your cut angle should be ' + cutAngleDeg.toFixed(3) + '&#176';
}
*/

function calcLengthStand() {
    let ringSegments = document.getElementById("segments").value;
    let cutAngleDeg = (360 / (2 * ringSegments));
    let cutAngleRad = ((Math.PI * cutAngleDeg) / 180);
    let ringDiameterI = document.getElementById("inchesDia").value;
    let ringDiameterF = document.getElementById("fracDia").value;
    let ringDiameterStd = ringDiameterI + ringDiameterF;
    let stopLengthStd = ringDiameterStd * Math.sin(cutAngleRad);
    const table = document.getElementById("cutList");
    let row = table.insertRow();
    let cell0 = row.insertCell(0);
    cell0.innerHTML = ringDiameterStd + "&quot";
    let cell1 = row.insertCell(1);
    cell1.innerHTML = ringSegments;
    let cell2 = row.insertCell(2);
    cell2.innerHTML = cutAngleDeg.toFixed(3) + "&deg";
    let cell3 = row.insertCell(3);
    cell3.innerHTML = stopLengthStd.toFixed(3) + "&quot";
}
    
function calcLengthMet() {
    let ringSegments = document.getElementById("segments").value;
    let cutAngleDeg = (360 / (2 * ringSegments));
    let cutAngleRad = ((Math.PI * cutAngleDeg) / 180);
    let ringDiameterC = document.getElementById("cmDia").value;
    let ringDiameterM = document.getElementById("mmDia").value;
    let ringDiameterMet = ringDiameterC + ringDiameterM;
    let stopLengthMet = ringDiameterMet * Math.sin(cutAngleRad);
    const table = document.getElementById("cutList");
    let row = table.insertRow();
    let cell0 = row.insertCell(0);
    cell0.innerHTML = ringDiameterMet + " cm";
    let cell1 = row.insertCell(1);
    cell1.innerHTML = ringSegments;
    let cell2 = row.insertCell(2);
    cell2.innerHTML = cutAngleDeg.toFixed(3) + "&deg";
    let cell3 = row.insertCell(3);
    cell3.innerHTML = stopLengthMet.toFixed(3) + " cm";
}

function removeRow() {
    var xRow = row.parentNode.parentNode.rowIndex;
    document.getElementById(myTable).deleteRow(xRow);
}



var x = document.getElementById("standardDIV");
var y = document.getElementById("metricDIV");

function hideFields() {
x.style.display = "block";
y.style.display = "none";
}

function selectMeasure() {
var z = document.getElementById("mySelect").value;
if (z === "1") {
    x.style.display = "block";
    y.style.display = "none";
} else {
    x.style.display = "none";
    y.style.display = "block";
    }
}

function getValues() {
  let a = (Math.floor(Math.random * 100)) //document.getElementById("inputZero").value;
  let b = (Math.floor(Math.random * 100)) //document.getElementById("inputOne").value;
  let c = (Math.floor(Math.random * 100)) //document.getElementById("inputTwo").value;
  let d = (Math.floor(Math.random * 100)) //document.getElementById("inputThree").value;
  let e = document.getElementById('deleteRow').outerHTML;
  
  const table = document.getElementById("testBody");
  let row = table.insertRow();
  let cell0 = row.insertCell(0);
  cell0.innerHTML = a;
  let cell1 = row.insertCell(1);
  cell1.innerHTML = b;
  let cell2 = row.insertCell(2);
  cell2.innerHTML = c;
  let cell3 = row.insertCell(3);
  cell3.innerHTML = d;
  let cell4 = row.insertCell(4);
  cell4.innerHTML = e;

}

function xOutRow(t) {
    var xRow = t.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(xRow);
}


