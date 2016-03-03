var qArray = [];
var sArray = [];

for (var i = 0; i < 5000000; i++) {
  qArray.push(Queue());
}

console.log("done queue");

var instArray = [];

for (var i = 0; i < 5000000; i++) {
  sArray.push(Stack());
}

console.log("done stack");