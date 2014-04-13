(function(){
  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $('#title').click(title);
    $('.number').click(number);
    $('.clear').click(clear);
    $('.decimal').click(decimal);
    $('#convert').click(convert);
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

})();
