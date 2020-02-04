var result;

function doStuff() {
  var x = 2;
  var y = 3;
}

greeter();

function greeter(name = 'bob', greeting = 'hello') {
    // greeting = greeting || 'hello';
    // if (greeting === undefined) greeting = 'hello';
    console.log(`${greeting} ${name}`);
    // console.log(arguments);
}

greeter('bob', 'hello', 'random extra data');
greeter('bob', 'aloha');
greeter('sally', 'howdy');
greeter('bob', '');
greeter('bob');
greeter(); // greeter('bob', 'hello');

var plusOne = function(x) {
    return x + 1;
};

function greetingKeywordStyle({name, greeting}) {
  console.log(`${greeting} ${name}`);
}
greetingKeywordStyle({name: 'John', greeting: 'howdy'});


function greetAll(greeting, ...names) {
  for (var i = 0; i < names.length; i++) {
    console.log(`${greeting} ${names[i].name}`);
    // console.log(greeting + ' ' + names[i]); // same as line above w/o template string
  }
}

// greetAll('aloha', 'jim', 'carol', 'bob');

var names = [{ name: 'tina' }, { name: 'bob' }];
greetAll('hi', ...names);
// compiles to greetAll('hi', {hame: 'tim'}, {name: 'bob'})
//var newObj = { ...names[0], age: 20 };

// public static void recordPrinter(Record record)

function recordPrinter(record) {
    console.log(record.id);
    console.log(record.name);
}

animalDbRecords = [{id: 1, name: 'peggy', type: 'pig'}, {id: 2, name: 'kermit', type: 'frog'}];
studentDbRecord = [{id: 1, name: 'tom', major: 'psych'}, {id: 2, name: 'sue', major: 'comp sci'}];

recordPrinter(animalDbRecords[0]);
recordPrinter(studentDbRecord[0]);

function add(...numbers) {
  /*
  var result = 0;
  for (var i = 0; i < numbers.length; i++) {
      result += numbers[i];
  }
  return result;
  */
  var result = 0;
  numbers.forEach(function(number) {
      result += number;
  });
/*
  function cb(number) {
    result += number
  }
  numbers.forEach(cb);
*/
  return result;
  /*
  var result = numbers.reduce(function(memo, current) {
    return memo + current; // 16
  }, 0);
  return result;
  */
}

console.log(add(2, 4));
console.log(add(2, 4, 10))