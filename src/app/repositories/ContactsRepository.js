const { uuid } = require("uuidv4");

const contacts = [
  {
    id: uuid(),
    name: "Messias",
    email: "messias@gmail.com",
    phone: "233221",
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
