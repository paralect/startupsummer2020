const fullNameInput = document.getElementById('fullName');
const summerHistoryInput = document.getElementById('summerHistory');
const markSelect = document.getElementById('mark');

const setMarks = (marks) => {
  const tableBody = document.getElementById('marks');
  tableBody.innerHTML = marks.map((mark) => `
    <tr>
      <td>${mark.fullName}</td>
      <td>${mark.summerHistory}</td>
      <td>${mark.mark}</td>
    </tr>`).join('');
}

const getMarks = async () => {
  const response = await fetch('/marks', {
    method: 'GET'
  });

  const json = await response.text();

  setMarks(JSON.parse(json));
};

const sendMark = async (mark) => {
  const response = await fetch('/marks', {
    method: 'POST',
    body: JSON.stringify(mark),
    headers: {
      'Content-Type': 'application/json'
    },
  });

  const jsonResponse = await response.text();
  console.log(JSON.parse(jsonResponse));
};

const onSubmit = (event) => {
  event.preventDefault();

  const mark = {
    fullName: fullNameInput.value,
    summerHistory: summerHistoryInput.value,
    mark: markSelect.value
  };
  
  sendMark(mark);
  getMarks();

  return false;
};

getMarks();