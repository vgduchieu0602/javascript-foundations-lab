const form = document.querySelector("#greeting-form");
const nameInput = document.querySelector("#name");
const result = document.querySelector("#result");

function createGreeting(name) {
    const cleanedName = name.trim();

    const formattedName = titleCase(cleanedName);

    if (upperFirstLetter === "") {
        return "Please enter your name.";
    }

    return `Hello, ${formattedName}!`;
}

function titleCase(str) {
    return str.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value;
    const greeting = createGreeting(name);

    result.textContent = greeting;
});
