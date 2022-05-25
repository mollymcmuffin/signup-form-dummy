var check = function() {
    if (document.getElementById('password1').value ==
      document.getElementById('password2').value) {
      document.getElementById('password2').style.borderColor = 'green';
      document.getElementById('password2').innerHTML = 'matching';
    } else {
      document.getElementById('password2').style.borderColor = 'red';
      document.getElementById('password2').innerHTML = 'not matching';
    }
  }



