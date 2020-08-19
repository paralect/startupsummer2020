const inp = document.getElementsByClassName('password')[0];

const serverRequest = () => {
  console.log(inp.value);
  console.log(JSON.stringify({ password: inp.value }));
  fetch('http://localhost:3000/hash', {
    method: 'POST',
    body: JSON.stringify({ password: inp.value })
  });
}
