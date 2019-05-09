$(document).ready(function() {
 
  $('#form').submit(function(e) {
    e.preventDefault();
	  
    var firstN = $('#firstN').val();
    var lastN = $('#lastN').val();
    var email = $('#email').val();
    var password = $('#password').val();
	var repassword = $('#repassword').val();
 
    $(".error").remove();
 
    if (firstN.length < 1) {
        
      $('#firstN').after('<span class="error"> Please enter First Name</span>');
      $('#message-area').html('<span class="error">Please enter First Name</span>');
      $('#formValidation').modal('show');
      
    }
	  
    if (lastN.length < 1) {
      $('#lastN').after('<span class="error">Please enter Last Name</span>');
       $('#message-area').html('<span class="error">Please enter Last Name</span>');
      $('#formValidation').modal('show');
    }
	  
    if (email.length < 1) {
      $('#email').after('<span class="error">Please Enter a Valid Email</span>');
    } else {
      var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
      var validEmail = regEx.test(email);
      if (!validEmail) {
        $('#email').after('<span class="error">Enter a valid email</span>');
         $('#message-area').html('<span class="error">Enter a valid email</span>');
        $('#formValidation').modal('show');
      }
    }
	  
    if (password.length < 10) {
      $('#password').after('<span class="error">Password must be at least 10 characters long</span>');
       //$('#message-area').html('<span class="error">Password must be at least 10 characters long</span>');
        //$('#formValidation').modal('show');
    }
	  
	if (repassword.length < 10) {
      $('#repassword').after('<span class="error">Password must be at least 10 characters long</span>');
      //$('#message-area').html('<span class="error">Confirm Password must be at least 10 characters long</span>');
      //$('#formValidation').modal('show');
    }
	  
  $('#password, #repassword').on('keyup', function () {
      
  if ($('#password').val() == $('#repassword').val()) {
    $('#error').html('Both Passwords are Matching'); 
  } else {
    $('#error').html('Both Pawords are Not Matching');
    // $('#message-area').html('<span class="error">Both Passwords are Matching</span>');
    //$('#formValidation').modal('show');
  }
  
});
	  
  });
 
});
