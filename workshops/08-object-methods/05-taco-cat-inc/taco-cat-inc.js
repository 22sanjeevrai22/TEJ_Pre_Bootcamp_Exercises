let tacoCatInc = {
  gourmetShell: {
    "hard treat shell": { cost: 2, quantity: 100 },
    "soft treat shell": { cost: 1.5, quantity: 100 },
  },

  gourmetFishFilling: {
    salmon: { cost: 5, quantity: 100 },
    tuna: { cost: 5.5, quantity: 100 },
    sardines: { cost: 1.5, quantity: 100 },
  },

  gourmetVeggie: {
    "cat grass": { cost: 1, quantity: 100 },
  },

  gourmetSeasoning: {
    "cat nip": { cost: 0.5, quantity: 100 },
    "treat dust": { cost: 0.1, quantity: 100 },
  },

  currentInventory: function () {
    let totalCost = 0;
    const categoryList = Object.keys(this);
    categoryList.forEach((category) => {
      const categoryValue = this[category];
      let sum = 0;
      for (let oppa in categoryValue) {
        const stock = categoryValue[oppa];
        let sum = stock.cost * stock.quantity;
        totalCost += sum;
        // console.log(sum);
        // console.log("...........");
      }
    });
    console.log(totalCost);
    return totalCost;
  },

  sale: function (order) {
    let totalCost = 0;
    for (let orderedCategory in order) {
      let orderedItem = order[orderedCategory];
      totalCost += this[orderedCategory][orderedItem].cost;
      // also subtract one from the quantity of the chosen item
      this[orderedCategory][orderedItem].quantity--;
    }
    this.cash = totalCost;
    // console.log(totalCost);
    return totalCost;
  },

  cash: 0,
};

// YOUR CODE BELOW
