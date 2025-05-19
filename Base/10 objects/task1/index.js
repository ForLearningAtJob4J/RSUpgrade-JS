const users = [
  {
    username: 'David',
    status: 'online',
    lastActivity: 10
  },
  {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
  },
  {
    username: 'Bob',
    status: 'online',
    lastActivity: 104
  }
];

const onlineUsers = users.filter((v, i, a) => v.status === 'online');

alert(`Сейчас в online следующие пользователи: ${onlineUsers.reduce((acc, cur) => acc += cur.username + ', ', '').slice(0, -2)}`);

