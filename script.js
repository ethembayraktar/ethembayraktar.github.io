const form = document.getElementById('form');

const emailInput = document.querySelector('input[name="email"]');
const phoneInput = document.querySelector('input[name="number"]');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Validate email
  const email = emailInput.value;
  if (!validateEmail(email)) {
    alert('Invalid email address');
    emailInput.focus();
    return;
  }

  // Validate phone number
  const phoneNumber = phoneInput.value;
  if (!validateTurkishPhoneNumber(phoneNumber)) {
    alert('Invalid Turkish phone number');
    phoneInput.focus();
    return;
  }

  // Submit the form
  form.submit();
});

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regex.test(email);
}

function validateTurkishPhoneNumber(phoneNumber) {
  // Check if the phone number starts with +90
  if (!phoneNumber.startsWith('+90')) {
    return false;
  }

  // Remove the +90 prefix
  const strippedPhoneNumber = phoneNumber.substring(3);

  // Check if the stripped phone number has 9 digits
  if (strippedPhoneNumber.length !== 9) {
    return false;
  }

  // Validate the stripped phone number
  const regex = /^\d{9}$/;
  if (!regex.test(strippedPhoneNumber)) {
    return false;
  }

  return true;
}
