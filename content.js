const clickr = document.querySelector(".color");
const input = document.querySelector("#ip");
const yo = document.querySelector(".container");

let arr = JSON.parse(localStorage.getItem("doit"));
if (typeof arr != "undefined" && arr == null) {
  arr = [];
}
// ********Printing the Tasks******
if (arr !== null) {
  for (let i = 0; i < arr.length; i++) {
    let headnew = document.createElement("article");
    let txt = `${i + 1}.${arr[i]}`;
    headnew.classList.add("f");
    headnew.innerHTML = `<h3>${txt}</h3> <button type="button" class="delete-btn">
                <span><i class="far fa-trash-alt"></i></span>
              </button>`;
    yo.appendChild(headnew);
  }
}
//****Adding the tasks to  local storage ********
clickr.addEventListener("click", function () {
  if (input.value == "") {
  } else {
    arr.push(input.value);
    localStorage.setItem("doit", JSON.stringify(arr));
    let headnew = document.createElement("article");
    let txt = `${arr.length}.${input.value}`;
    headnew.classList.add("f");
    headnew.innerHTML = `<h3>${txt}</h3> <button type="button" class="delete-btn">
                <span><i class="far fa-trash-alt"></i></span>
              </button>`;
    yo.appendChild(headnew);
    location.reload();
    input.value = "";
  }
});

//*****Deleting a task from list and local storage*******
const deleteBtn = document.querySelectorAll(".delete-btn");
let buttonsCount = deleteBtn.length;
for (let i = 0; i <= buttonsCount; i += 1) {
  deleteBtn[i].onclick = function (e) {
    const element = e.currentTarget.parentElement;
    element.remove();
    arr.splice(i, 1);
    localStorage.setItem("doit", JSON.stringify(arr));
    location.reload();
  };
}

//*****Made by Saksham Tomar******/
