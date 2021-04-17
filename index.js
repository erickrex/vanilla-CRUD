document.addEventListener("DOMContentLoaded", function () {
  //does not execute the js until the entire html is loaded
  console.log("mira");
  const table = document.getElementById("table");
  const alert = document.getElementById("alert");
  const btn = document.getElementById("add");
  let id = 1;
  function removeTodo(id) {
    document.getElementById(id).remove();
  }
  function addTodo() {
    if (title.value === "" || description.value == "") {
      alert.classList.remove("d-none");
      alert.innerText = "Title and description are required";
      console.error("Title and description are required");
      return;
    }

    alert.classList.add("d-none");
  }

  btn.onclick = addTodo;
});
