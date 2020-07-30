export default function getData() {
  const output = document.getElementById("output");
  while(output.firstChild) {
    output.removeChild(output.firstChild);
  }
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const data = JSON.parse(xhttp.responseText);
      data.forEach((item) => {
        const itemContainer = document.createElement("DIV");
        const firstName = document.createElement("SPAN");
        const lastName = document.createElement("SPAN");
        const description = document.createElement("SPAN");
        const rank = document.createElement("SPAN");
        firstName.innerHTML = `firstName: ${item.firstName}, `;
        lastName.innerHTML = `lastName: ${item.lastName}, `;
        description.innerHTML = `description: ${item.description}, `;
        rank.innerHTML = `rank: ${item.rank} `;
        itemContainer.append(firstName);
        itemContainer.append(lastName);
        itemContainer.append(description);
        itemContainer.append(rank);
        output.append(itemContainer);
      });
    }
  };
  xhttp.open("GET", "/spent", true);
  xhttp.send();
}