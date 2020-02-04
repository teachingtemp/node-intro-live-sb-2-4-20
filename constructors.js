let orderNumber = 1;

const baseDrinkCosts = {
    drip: 2,
    americano: 3,
    latte: 4,
    mocha: 5,
};

const sizeModifer = {
    tall: 1,
    grande: 1.5,
    venti: 2,
}

/*
function computeCost() {
    const baseCost = baseDrinkCosts[this.drinkType];
    const multipler = sizeModifer[this.size];

    if (!baseCost) {
        throw new Error(`${this.drinkType} is a drink on the menu`);
    }
    if (!multipler) {
        throw new Error(`${this.size} is not a valid size`);
    }

    return baseCost * multipler;
}
*/


function StarBucksOrder(drinkType, size, customizations) {
  /* this = {
    constructor: StarBucksOrder
  };
  */
  this.orderNumber = orderNumber++;
  this.drinkType = drinkType;
  this.size = size;
  this.customizations = customizations;

  // this.computeCost = computeCost;
  // return this;
}

StarBucksOrder.prototype.computeCost = function () {
    const baseCost = baseDrinkCosts[this.drinkType];
    const multipler = sizeModifer[this.size];

    if (!baseCost) {
        throw new Error(`${this.drinkType} is a drink on the menu`);
    }
    if (!multipler) {
        throw new Error(`${this.size} is not a valid size`);
    }

    return baseCost * multipler;
}

const myOrder = new StarBucksOrder('drip', 'grande', 'no room');
const anotherOrder = new StarBucksOrder('latte', 'venti', 'extra foam');
console.log(myOrder.computeCost());
//console.log(myOrder.__proto__.computeCost());
console.log(myOrder.computeCost === myOrder.__proto__.computeCost);
