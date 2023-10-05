
// selectors

const mainApp = document.querySelector("#app");
const textInput = document.querySelector("#textInput");
const addBtn = document.querySelector("#addBtn");
const doneCounter = document.querySelector("#doneCounter");
const listCounter = document.querySelector("#listCounter");
const taskLists = document.querySelector("#taskLists");

// functions

const createUI = (inputValue) => {
  const list = document.createElement("div");
  list.classList.add("task_counter")
  list.innerHTML = `<div class="flex mb-3 justify-between items-center border-2 border-black p-3">
          <div class="forToggle_chacked flex  items-center">
            <input type="checkbox" class="w-5 h-5 count" />
            <div class="  edit_task ms-2">
              ${inputValue}
            </div>
          </div>
          <div class="">
            <button class="task_edit_btn border-black border p-2 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2"
                stroke="currentColor" class="w-4">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
              </svg>
            </button>
            <button class="task_del_btn border-black border p-2 rounded">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2"
                stroke="currentColor" class="w-4">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
            </button>
          </div>
        </div>`;


  // line-through

  const forToggle_chacked = list.querySelector(".forToggle_chacked");
  forToggle_chacked.addEventListener("click", () => {
    forToggle_chacked.querySelector("input").toggleAttribute("checked");
    forToggle_chacked.querySelector(".edit_task").classList.toggle("line-through");
    to_complete();
  })


  // try to delete
  const task_del_btn = list.querySelector(".task_del_btn");
  task_del_btn.addEventListener("click", () => {
    if (confirm("Are U Sure to delete")) {
      list.remove();
      to_counter();
      to_complete();

    }

    // confirm("Are u sure to delete") && list.remove();
  });

  // try to edit
  const task_edit_btn = list.querySelector(".task_edit_btn");
  task_edit_btn.addEventListener("click", () => {

    const edit_task = list.querySelector(".edit_task")

    const inp_edit = document.createElement("input");
    inp_edit.classList.add("border", "border-black", "p-1", "rounded")
    inp_edit.value = edit_task.innerText;

    edit_task.innerText = null
    edit_task.append(inp_edit);

    inp_edit.addEventListener("blur", () => {
      edit_task.innerText = inp_edit.value
    })
  });

  return list;


}

// to count tasks
const to_counter = () => {
  const count = document.querySelectorAll(".task_counter").length;
  listCounter.innerText = count;
};

// to count complete task_counter
const to_complete = () => {
  const complete = document.querySelectorAll(".task_counter .count:checked").length;
  doneCounter.innerText = complete;
}

console.log(to_complete())


// handler functions 

const addBtn_handler = () => {

  if (textInput.value.trim()) {
    taskLists.append(createUI(textInput.value));
    to_counter();
    to_complete();

    //   clear input
    textInput.value = null
  } else {
    alert("input some text")
  }

  // next way ;

  // textInput.value.trim() && taskLists.append(createUI(textInput.value));

  // textInput.value = null;

};





// eventListeners


// addBtn.onclick = addBtn_handler;
addBtn.addEventListener("click", addBtn_handler);





