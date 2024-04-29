function validateForm() {
  var name = document.getElementById("name").value;
  var registerNo = document.getElementById("registerNo").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var pan = document.getElementById("pan").value;
  var address = document.getElementById("address").value;
  var aadhar = document.getElementById("aadhar").value;

  if (!isNaN(name) || name.trim() === "") {
    alert("Please enter a valid name without numbers");
    return false;
  }

  if (registerNo.trim() === "") {
    alert("Please enter Register No");
    return false;
  }

  if (email.trim() === "" || !/\S+@\S+\.\S+/.test(email)) {
    alert("Please enter a valid email address");
    return false;
  }

  if (phone.trim() === "" || !/^\d{10}$/.test(phone)) {
    alert("Please enter a valid 10-digit phone number");
    return false;
  }

  if (pan.trim() === "" || !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan)) {
    alert("Please enter a valid PAN No (e.g., ABCDE1234F)");
    return false;
  }

  if (address.trim() === "") {
    alert("Please enter your address");
    return false;
  }

  if (aadhar.trim() === "" || !/^\d{12}$/.test(aadhar)) {
    alert("Please enter a valid 12-digit Aadhar No");
    return false;
  }

  alert("Validation successful!");
  return true;
}
