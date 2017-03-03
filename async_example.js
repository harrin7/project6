const async = require('async');
const testArray = [1,2,3];

function regularMap() {
  var newArray = testArray.map(function(element) {
   setTimeout(function() {
     return element * 2;
    }, 1000 ) ;
  });
  console.log(newArray);
  console.log('we are done mapping!')
}

regularMap();

function asyncMap() {
  async.map(testArray, function(element, callback) {
   setTimeout(function() {
     const newElement = element * 2;
     callback(null, newElement);
    }, 1000 ) ;
  }, function(err, transformedArray) {
    console.log(transformedArray);
    console.log('we are done mapping!');
  });
}

asyncMap();
