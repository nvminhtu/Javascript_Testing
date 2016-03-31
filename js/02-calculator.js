/**
 * Calculator methods
 */
(function(window){
  var calculator =  {
    //return sum
    sum: function(a,b) {
      return a + b;
    },
    subtract: function(a,b) {
      return a - b;
    },
    divide: function(a,b) {
      return a / b;
    },
    multiply: function(a,b) {
      return a * b;
    }
  };
  window.Calculator = calculator;
})(this);