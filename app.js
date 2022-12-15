
let visitorName = "Visitor";


function greetUser() {
    let name = prompt('Welcome! What is your name adventurer?');

    if (name == '') {
        name = prompt('.....can you enter a real name?');
    } else {
        visitorName = name;
    };
    return visitorName;
};

function confirmEntrance(name) {
    let confirmation = confirm(`Would you like to see an amazing website ${name}?`);
    if (confirmation) {
        alert(`Welcome to my website, ${name}!`);
    }
    else {
        alert(`Why are you even here, ${name}! `);
    };
};

function changeGreeting(name) {
    const heroTextContainer = document.getElementById('hero-text-container');
    heroTextContainer.querySelector(".greet-visitor").innerHTML = `Adventure Awaits, ${name}!`
};

