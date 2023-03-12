function zero(func = undefined) {
    return func === undefined ? 0 : func(0);
  }
  function one(func = undefined) {
    return func === undefined ? 1 : func(1);
  }
  function two(func = undefined) {
    return func === undefined ? 2 : func(2);
  }
  function three(func = undefined) {
    return func === undefined ? 3 : func(3);
  }
  function four(func = undefined) {
    return func === undefined ? 4 : func(4);
  }
  function five(func = undefined) {
    return func === undefined ? 5 : func(5);
  }
  function six(func = undefined) {
    return func === undefined ? 6 : func(6);
  }
  function seven(func = undefined) {
    return func === undefined ? 7 : func(7);
  }
  function eight(func = undefined) {
    return func === undefined ? 8 : func(8);
  }
  function nine(func = undefined) {
    return func === undefined ? 9 : func(9);
  }
  
  function plus(y) {
    return function (x) {
      return x + y;
    };
  }
  function minus(y) {
    return function (x) {
      return x - y;
    };
  }
  function times(y) {
    return function (x) {
      return x * y;
    };
  }
  function divided_by(y) {
    return function (x) {
      return Math.floor(x / y);
    };
  }
  
console.log(seven(plus(three())))

export  {zero,one, two, three, four, five, six, seven, eight, nine, plus , minus, times, divided_by};