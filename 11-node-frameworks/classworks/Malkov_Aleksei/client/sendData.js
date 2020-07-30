export default function sendData() {
  const form = document.getElementById("mainForm");
  const formData = new FormData(form);
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const data = JSON.parse(xhttp.responseText);
    }
  };
  xhttp.open("POST", "/spent", true);
  xhttp.setRequestHeader("Content-Type", "application/json");
  const res = JSON.stringify({
    firstName: form.querySelector('#firstName').value,
    lastName: form.querySelector('#lastName').value,
    description: form.querySelector('#description').value,
    rank: form.querySelector('#rank').value,
  });
  xhttp.send(res);
}