function stuff() {
  var x = 10;
  var y = x - 4;
  console.log(y);
  var z = y += 10;
  console.log(z);
}

function stuff() {
    var x, y, z;
    x = 10;
    y = x - 4;
    console.log(y);
    z = y += 10;
    console.log(z);
}
  
function funnyHoistExample() {
    console.log(x);
    var x = 2;
}

/* what the interp sees
function funnyHoistExample() {
    var x;
    console.log(x);
    x = 2;
}
*/


funnyHoistExample();

let x = 10;
function temporalDeadZoneEx() {
    //let x; CREATE TDZ
    console.log(x);
    let x = 5;
    // END TDZ
}

temporalDeadZoneEx();