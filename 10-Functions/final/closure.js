function x() {
  var a = 7;
  function y() {
    console.log(a);
    var b = 10;
    function z() {
      console.log(b);
    }
  }
  y();
}
x();


// Closures
const secureBooking = function () {
    let passengerCount = 0;
  
    return function () {
      passengerCount++;
      console.log(`${passengerCount} passengers`);
    };
  };
  
  const booker = secureBooking();
  
  booker();
  booker();
  booker();
  
  console.dir(booker); 