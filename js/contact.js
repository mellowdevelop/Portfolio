//Check of email de juiste tekens bevat.
function validateEmail(email) {
  var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}
//functie om te checken of de velden zijn ingevuld
function checkForm(){
  var email = document.getElementById('email').value;
  var name = document.getElementById('name').value;
//wanneer een veld niet is ingevuld laat dat weten met een alert.
  if (name == '') {
    alert('Naam is verplicht!')
  } else if (email == '') {
    alert('E-mail is verplicht!')
  } else {
    alert('Bedankt voor het contacteren, we zullen zo snel mogelijk uw vraag bekijken')
  }
}
