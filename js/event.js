// const forkeyD = document.querySelector("#forKeys");

// forkeyD.addEventListener("keydown", () => {
//     console.log("keydown")
// })

// forkeyD.addEventListener("keyup", () => {
//     console.log("keyup")
// })

// document.querySelector("#chg").addEventListener("change", () => {
//     console.log("chg")
// });

// const forFile = document.querySelector("#hello");

// forFile.addEventListener("change", () => {
//     console.log(forFile.files[0]);

// })


const forForm = document.querySelector("#forForm");

forForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(forForm);
    formData.append("salary", 1200);

    console.log(formData.get(("your_name")));
    console.log(formData.get("your_birthday"));
    console.log(formData.get("salary"));

});

window.addEventListener("scroll", () => {
    console.log(
        "u scrolling"
    )
});

document.addEventListener("click", (event) => {
    console.log(event)
})