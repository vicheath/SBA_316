document.querySelector(".textbox_main").addEventListener("submit", function (event) {
    event.preventDefault(); // prevent form submission
    const textbox = document.getElementById("textbox");
    if (textbox.value.trim() === "") {
        alert("Please enter some text before submitting.");
    } else {
        const paragraph = document.createElement("p");
        paragraph.textContent = textbox.value;
        document.querySelector(".text_area").appendChild(paragraph);
        textbox.value = ""; // clear the textbox
    }
});
