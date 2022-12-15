let visitorName = prompt('What is your name adventurer?');

let confirmation = confirm(`Would you like to see an amazing website ${visitorName}?`);


if (confirmation) {
    alert(`Welcome to my website, ${visitorName}!`);
}
else {
    window.location.assign('https://google.com');
}

function changeGreeting(name) {
    const heroTextContainer = document.getElementById('hero-text-container');
    heroTextContainer.querySelector(".greet-visitor").innerHTML = `Adventure Awaits, ${name}!`
}

