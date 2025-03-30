// YOUR CODE BELOW
const me2 = {
  name: "David",
  getGreeting: function () {
    let friend = {
      name: "Jeff",
    };
    return `Hi ${friend.name}, my name is ${this.name}.`;
  },
};
