const inp = document.getElementsByClassName('password')[0];

const serverRequest = () => {
  fetch('http://localhost:3000/', {
    method: 'POST',
    body: JSON.stringify({password: inp.value})
  })
}

