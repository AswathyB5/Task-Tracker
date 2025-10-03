let input = document.getElementById("inputbox");
let lists = document.getElementById("list-container");

const addtask = () => {
  if (input == "") {
    alert("please enter task");
  }else{
    let li=document.createElement('li')
    li.innerHTML = `<div class="row ms-3">
     <div class="col-6">
        <input type="checkbox" class="me-2">
        <span>${input.value}</span>
      </div>
      <div class="col-6 mb-1" style="margin-top:-10/"Lpx">
        <button class="edit-btn btn btn-sm ms-2"><img src="./assets/edit.png" height="34px"></button>
        <button class="delete-btn btn btn-sm"><img src="./assets/delete.png" height="28px"></button>
      </div> 
      </div>`;
    lists.appendChild(li)

      let deletebtn = li.querySelector(".delete-btn");
      deletebtn.onclick = () => {
        li.remove();
      };

  }

};


