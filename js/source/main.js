(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#title').click(title);
    $('.number').click(number);
    $('.clear').click(clear);
    $('.decimal').click(decimal);
    $('#convert').click(convert);
    $('.push').click(push);
    $('.operator').click(operator);
  }

  function number(){
    var num = this.textContent * 1;
    var output = $('#display').text();

    if (output === '0') {
      output = num;
    } else {
      output = output + num;
    }

    $('#display').text(output);

  }

  function clear(){
    var cleartype = this.textContent;
    if (cleartype === 'C') {
      $('#display').text(0);
    } else if (cleartype === 'X') {
      $('#queue').empty();
    }
  }

  function decimal(){
    var period = this.textContent;
    var output = $('#display').text();

    if (output.indexOf('.') < 0) {
      output += period;
      $('#display').text(output);
    }
  }

  function convert(){
    var output = $('#display').text();
    $('#display').text(output * -1);
  }

  function title(){

    var display = $('#container').css('display');

    if(display === 'none'){
      $('#container').fadeIn();
    } else {
      $('#container').fadeOut();
    }
  }

  function push(){
    var display = $('#display').text();
    $('#display').text(0);
    var $div = $('<div>');
    $div.text(display);
    $('#queue').prepend($div);
  }

  function operator(){
    var op = $(this).data('op');
    var x = $('#queue > div:nth-child(1)').text() * 1;
    var y = $('#queue > div:nth-child(2)').text() * 1;

    switch(op) {
      case 'add':
        var result = x + y;
      break;
      case 'sub':
        result = x - y;
      break;
      case 'mult':
        result = x * y;
      break;
      case 'div':
        result = x / y;
      break;
      case 'exp':
        result = Math.pow(y, x);
      break;
      case 'root':
        result = Math.sqrt(x);
      break;
      case 'fact':
        result = factorial(x);
      break;
      case 'sum':
        result = sum();

    }

    $('#display').text(result);
    $('#queue').empty();

  }

  function sum(){
    var total = 0;

    $('#queue > div').each(function(index, div){
      var x = div.textContent * 1;
      total = total + x;
    });

    return total;
  }

  function factorial(x){
    var product = 1;

    for(var i = 2; i <= x; i++){
      product = product * i;
    }
    console.log(product);

    return product;
  }

})();
