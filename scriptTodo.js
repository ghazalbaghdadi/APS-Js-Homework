function todoList(todos) {
  // Write your code here...
  const h1 = document.createElement("h1");
  h1.innerText = "MY TO-DO LIST";
  const container = document.querySelector("#content");
  container.append(h1);
  const ul = document.createElement("ul");
  container.append(ul);
  for (let i = 0; i < todos.length; i++) {
    const li = document.createElement("li");
    li.innerText = todos[i].todo;
    ul.append(li);
    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });
  }
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
