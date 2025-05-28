
function convertMsToDays(ms) {
    return Math.round(ms / 1000 / 60 / 60 / 24);
}

function getDaysBeforeBirthday(nextBirthdayDate) {
    return convertMsToDays(nextBirthdayDate - Date.now());
}

console.log(getDaysBeforeBirthday(new Date(2026, 4, 16)));