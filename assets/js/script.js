function updateDaysLived() {
    const birthDate = new Date('1985-04-03T11:40:00');
    const currentDate = new Date();
    const differenceInMilliseconds = currentDate - birthDate;

    const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    const differenceInHours = Math.floor((differenceInMilliseconds / (1000 * 60 * 60)) % 24);
    const differenceInMinutes = Math.floor((differenceInMilliseconds / (1000 * 60)) % 60);

    document.getElementById('days-lived').textContent = `Days lived: ${differenceInDays}, Hours: ${differenceInHours}, Minutes: ${differenceInMinutes}`;
}

function addRandomGlitchEffect() {
    const elementsToGlitch = [document.querySelector('h1'), document.getElementById('days-lived')];
    const glitchClasses = ['glitch', 'flicker', 'big-glitch'];

    elementsToGlitch.forEach(element => {
        function glitchEffect() {
            const isBigGlitch = Math.random() < 0.2; 
            const randomGlitchClass = isBigGlitch ? 'big-glitch' : glitchClasses[Math.floor(Math.random() * (glitchClasses.length - 1))];
            element.classList.add(randomGlitchClass);

            // Shorten the duration of the glitch effect
            setTimeout(() => {
                element.classList.remove(randomGlitchClass);
            }, isBigGlitch ? 500 : 250); 

            setTimeout(glitchEffect, 5000 + Math.random() * 15000); 
        }
        glitchEffect();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateDaysLived();
    addRandomGlitchEffect();
});
