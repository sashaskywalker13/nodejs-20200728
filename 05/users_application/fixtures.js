const User = require('./models/User');
const users = [
  {email: 'user1@mail.com', name: 'user1'},
  {email: 'user2@mail.com', name: 'user2'},
];

async function main() {
  await User.deleteMany({});

  for (const user of users) {
    await User.create(user);
  }
}

main();
