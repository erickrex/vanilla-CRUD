document.addEventListener("DOMContentLoaded", function () {
  //does not execute the js until the entire html is loaded
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const table = document.getElementById("table");
  const alert = document.getElementById("alert");
  const btn = document.getElementById("add");

  function addTodo() {
    if (title.value === "" || description.value == "") {
      alert.classList.remove("d-none");
      alert.innerText = "Title and description are required";
      console.error("Title and description are required");
      return;
    }

    alert.classList.add("d-none");
    const row = table.insertRow();
    row.innerHTML = `
            <td>${title.value}</td>
            <td>${description.value}</td>
            <td></td>
        `;
  }

  btn.onclick = addTodo;
});
