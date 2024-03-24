function updateDaysLived() {
    const birthDate = new Date('1985-04-03T11:40:00');
    const currentDate = new Date();
    const differenceInMilliseconds = currentDate - birthDate;

    const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    const differenceInHours = Math.floor((differenceInMilliseconds / (1000 * 60 * 60)) % 24);
    const differenceInMinutes = Math.floor((differenceInMilliseconds / (1000 * 60)) % 60);

    document.getElementById('days-lived').textContent = `Days lived: ${differenceInDays}, Hours: ${differenceInHours}, Minutes: ${differenceInMinutes}`;
}

// Glitch effect randomly
function addRandomGlitchEffect() {
    const elementsToGlitch = [document.querySelector('h1'), document.getElementById('days-lived')];
    const glitchClasses = ['glitch', 'flicker'];

    elementsToGlitch.forEach(element => {
        setTimeout(function glitchEffect() {
            const randomGlitchClass = glitchClasses[Math.floor(Math.random() * glitchClasses.length)];
            element.classList.add(randomGlitchClass);

            setTimeout(() => {
                element.classList.remove(randomGlitchClass);
            }, 500); 

            setTimeout(glitchEffect, 5000 + Math.random() * 10000); // Random delay for next glitch
        }, 5000 + Math.random() * 10000);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateDaysLived();
    addRandomGlitchEffect();
});
