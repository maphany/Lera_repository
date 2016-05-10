$(document).ready(function() {
//.ready is a function to which we pass an anonymous function which is a call back function
//respond to a click
//
$('#button-1').click(function(){
var input = $('#field-1').val()
console.log(input);
$('#display').append("<li class='input-1'>" + input + "</li>"); 
})
//grab the value of input

//populate display with value
$('h1').css('background','blue')	
});
