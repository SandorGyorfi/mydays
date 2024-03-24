function updateDaysLived() {
    const birthDate = new Date('1985-04-03T11:40:00');
    const currentDate = new Date();
    const differenceInMilliseconds = currentDate - birthDate;
    const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    document.getElementById('days-lived').textContent = `Days lived: ${differenceInDays}`;
}

document.addEventListener('DOMContentLoaded', updateDaysLived);
