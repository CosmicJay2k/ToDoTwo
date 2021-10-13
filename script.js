/* HTML elements */
const input = document.querySelector('.inputHTML');
const list = document.querySelector('.todoList');
const counterMsg = document.querySelector('.counterHTML');
const errorMsg = document.querySelector('.errorHTML');

let completedCounter = 0;
input.focus();

/* Counter function */
function counterFunc() {
  counterMsg.innerHTML = `${completedCounter} completed`;
};

/* Button/Input */
btnOK.addEventListener('click', addItem);
input.addEventListener('keyup', function (e) {
  let key = e.which || e.keycode || 0;
  if (key === 13) {
    e.preventDefault();
    addItem();
  }
});

/* Add function */
function addItem() {
  const text = input.value;
  if (text.length == 0) {
    errorMsg.innerHTML = "Input must not be empty";
    input.focus();
  }
  else {
    const item = document.createElement("li");
    list.appendChild(item);

    const itemLabel = document.createElement("span");
    itemLabel.innerText = text;
    item.appendChild(itemLabel);

    const trashcan = document.createElement("span");
    trashcan.innerHTML = '&#x1F5D1';
    trashcan.setAttribute("class", "trashcan");
    item.appendChild(trashcan);

    input.value = "";
    input.focus();

    /* Completed or not method */
    itemLabel.addEventListener("click", function () {
      if (itemLabel.getAttribute("class") == "completed") {
        itemLabel.setAttribute("class", "");
        completedCounter--;
      }
      else {
        itemLabel.setAttribute("class", "completed");
        completedCounter++;
      }
      counterFunc();
      input.focus();
    });
    /* Remove item method */
    trashcan.addEventListener("click", function () {
      if (itemLabel.getAttribute("class") == "completed") {
        item.remove();
        completedCounter--;
      }
      else {
        item.remove();
      }
      counterFunc();
    });
  }
};