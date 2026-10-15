const form = document.querySelector("#greeting-form");
const nameInput = document.querySelector("#name");
const result = document.querySelector("#result");

function createGreeting(name) {
    const cleanedName = name.trim();

    //Cách 1
    const upperFirstLetter = cleanedName.charAt(0).toUpperCase() + cleanedName.slice(1).toLowerCase();

    //Cách 3
    const titleCaseWord = cleanedName.replace(/^w/, c => c.toUpperCase())

    if (upperFirstLetter === "") {
        return "Please enter your name.";
    }

    return `Hello, ${titleCase(upperFirstLetter)}!`;
}

//Cách 2
function titleCase(str) {
    return str.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join();
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value;
    const greeting = createGreeting(name);

    result.textContent = greeting;
});
