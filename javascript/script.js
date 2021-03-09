const newPizza = new Pizza();

const pizzaSizeBiller = (size) => {
  newPizza.addPizzaSizeToBill(size);
};

const pizzaToppingsAdder = (topping) => {
  newPizza.addToppingsToList(topping);
};

const pizzaToppingsBiller = () => {
  newPizza.addToppingsToBill();
};
