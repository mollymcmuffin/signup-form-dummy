var check = function() {
    if (document.getElementById('password1').value ==
      document.getElementById('password2').value) {
      document.getElementById('password2').style.borderColor = 'green';
      document.getElementById('message').innerHTML = 'Matched';
    } else {
      document.getElementById('password2').style.borderColor = 'red';
      document.getElementById('message').innerHTML = '*Not Matching';
      document.getElementById('message').style.color = 'red';
    }
  }



