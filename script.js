let input = document.getElementById("inputbox");
let lists = document.getElementById("list-container");
let editLi = null;

const addtask = () => {
  if (input.value === "") {
    alert("please enter task");
  } else if (editLi) {
    let span = editLi.querySelector("span");
    span.textContent = input.value;
    input.value = "";
    editLi = null;
  } else {
    let li = document.createElement("li");
    li.className = "d-flex align-items-center justify-content-between w-100 mb-1 px-4";
    li.style.minHeight = "48px";
    li.innerHTML = `
      <div class="d-flex align-items-center">
        <input type="checkbox" class="me-2" onchange="this.nextElementSibling.style.textDecoration = this.checked ? 'line-through' : 'none'">
        <span>${input.value}</span>
      </div>
      <div>
        <button class="edit-btn btn btn-sm ms-2">
          <img src="./assets/edit.png" height="34px">
        </button>
        <button class="delete-btn btn btn-sm ms-2">
          <img src="./assets/delete.png" height="30px">
        </button>
      </div>
    `;
    lists.appendChild(li);

        let deletebtn = li.querySelector(".delete-btn");
        deletebtn.onclick = () => {
          li.remove();
        };
    li.querySelector(".edit-btn").onclick = () => {
      input.value = li.querySelector("span").textContent;
      editLi = li;
    };

    input.value = "";
  }
};
