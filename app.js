
let visitorName = "Visitor";

function greetUser() {
    let name = prompt('Welcome! What is your name adventurer?');

    while (name == '') {
        name = prompt('.....can you enter a real name?');
    }

    visitorName = name;
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

function howManyLives() {
    let numOfLives = prompt('How many lives do you want to start with? (1-5)')
    while (numOfLives > 5 || numOfLives <= 0) {
        numOfLives = prompt('Please reenter how many lives you want to start with. (1-5)')
    };

    for (let i = 0; i < numOfLives; i++) {
        document.write(
            "<img width='30px' height='30px' src='https://orig04.deviantart.net/253e/f/2015/073/1/b/pink_pixel_heart_gif_by_kerostudio-d8fohut.gif' alt='pixel hearts'/>"
        );
    };
}

function changeGreeting(name) {
    const heroTextContainer = document.getElementById('hero-text-container');
    heroTextContainer.querySelector(".greet-visitor").innerHTML = `Adventure Awaits, ${name}!`
};

