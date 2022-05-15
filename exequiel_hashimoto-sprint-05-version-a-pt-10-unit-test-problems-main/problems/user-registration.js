class LinkedListNode {

  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {

  constructor() {
    // Default to empty
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(value) {

    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  dequeue() {

    if (!this.head) {
        return null;
    }

    const returnValue = this.head.value;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    this.length--;
    return returnValue;
  }

  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

class User {

  constructor (name) {
    this.name = name;
  }
}

class UserRegistration {

  constructor (maxUsers) {
    this.users = new LinkedList();

    this.nameList = new Set();
    this.maxUsers = maxUsers;

  }

  registerUser(username) {
    if (!this.nameList.has(username)) {

      const newUser = new User(username);

      this.users.enqueue(newUser);

      this.nameList.add(username);

      if (this.users.length > this.maxUsers) {

        const userToRemove = this.users.dequeue();

        return(`${userToRemove.name} unregistered, ${username} registered`);

      }

      return(`${username} registered`);

    } else {

      return(`${username} failed to register`);

    }
  }

}

module.exports = {
  LinkedList,
  UserRegistration
};
