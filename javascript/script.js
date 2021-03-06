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

const pizzaBaseBiller = (base) => {
  newPizza.addBaseToBill(base);
};

const createInvoice = () => {
  const cart = newPizza.cart;
  generateInvoice(cart);

  document.getElementById("grandtotal").innerText = `${newPizza.total}`;
};
