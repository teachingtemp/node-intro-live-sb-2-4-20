var x = 4;

function outer() {
  x = 10;
  var y = x + 2; // 12
  console.log(y);
  function inner() {
    var a = 4;
    var z = x + y + a; // 10 + 12 + 4
    console.log(z);
  }
  inner();
  console.log(z);
}

const names = ['tim'];
// invalid: names = ['bob', 'tim']
names.push('bob');
console.log(names);