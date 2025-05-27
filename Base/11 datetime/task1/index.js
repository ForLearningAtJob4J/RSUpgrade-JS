function getDateFormat(date, separator) {
    let d = date.getDate();
    d = '0'.repeat(d < 10) + d;
    let m = date.getMonth() + 1;
    m = '0'.repeat(m < 10) + m;
    let y = date.getFullYear();
    return `${d}${separator}${m}${separator}${y}`;
}

console.log(getDateFormat(new Date(), '.'));
console.log(getDateFormat(new Date(), '-'));