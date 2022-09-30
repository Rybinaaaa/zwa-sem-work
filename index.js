const data = [
  {
    id: 1,
    title: "delectus aut autem 1",
    completed: false
  },
  {
    id: 2,
    title: "delectus aut autem 2",
    completed: false
  },
  {
    id: 3,
    title: "delectus aut autem 3",
    completed: true
  },
  {
    id: 4,
    title: "delectus aut autem 4",
    completed: false
  },
  {
    id: 5,
    title: "delectus aut autem 5",
    completed: false
  }
];

const rootEl = document.getElementById("root");

if (data.length) {
  renderList();
}

function checkTask(e) {
  const id = e.target.getAttribute("data-attr");
  data.forEach((el) => {
    if (el.id === +id) {
      el.completed = !el.completed;
    }
  });
  renderList();
  console.log(data);
}

function renderList() {
  rootEl.innerHTML = ` 
    <ul class="list">
        ${(data.map(
    (el) => `
        <li class="list__el">
          <h2>${el.title}</h2>
          <input ${el.completed ? "checked" : ""} type="checkbox" data-attr="${
      el.id
    }">
        </li>`)).join('')}
    </ul>
  `;
  rootEl.querySelectorAll("li.list__el").forEach((el) => {
    el.addEventListener("change", checkTask);
  });
}
