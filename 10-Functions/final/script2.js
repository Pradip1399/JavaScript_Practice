// The call and apply Methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    console.log(this);
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
console.log(lufthansa.book);
console.log(book);
// book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

// lufthansa.plane=300;
book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

book.call(lufthansa, 777, 'Pradip Lengare');
console.log(lufthansa);

const vr = {
  name: 'pradip',
  thisf() {
    console.log(this);
  },
};

// vr.thisf();

// const bookEW23_ = book.bind(eurowings,23);
// bookEW23_("Pooja");
// bookEW23_("Pooja11");

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  this.planes++;
  //   console.log(this.planes);
  console.log(this);
};
// lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', () => lufthansa.buyPlane());

buyPlane1 = name => {
  this.planes++;
  //   console.log(this.planes);
  console.log(this);
};

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23,300);
// addVAT = value => value + value * 0.23;

console.log(addVAT());

const addTaxRate = function (rate, value) {
  return value + value * rate;
};
const addVAT2 = addTaxRate(0.23, 300);
console.log(addVAT2);


// IIFE
(function () {
    console.log('This will never run again...');
    const isPrivate = 23;
  });


  {
    const isPrivate = 23;
    var notPrivate = 46;
  }
  // console.log(isPrivate);
  console.log(notPrivate);

