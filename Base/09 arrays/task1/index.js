
function giveParcel(arr) {
  alert(`${arr.shift()} получил(а) посылку. В очереди осталось ${arr.length} человек.`)
}

function leaveQueueWithoutParcel(arr) {
  alert(`${arr.pop()} не получил(а) посылку и ушел(ла) из очереди.`)
}

const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

giveParcel(peopleWaiting);
giveParcel(peopleWaiting);
giveParcel(peopleWaiting);

while (peopleWaiting.length > 0) {
  leaveQueueWithoutParcel(peopleWaiting);
}