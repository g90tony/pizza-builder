function Pizza() {
  // ingredients meta data
  sizes = [
    {
      name: "Mega",
      slices: 12,
      multiplier: 1.75,
      price: 1750,
    },
    {
      name: "Large",
      slices: 8,
      multiplier: 1.5,
      price: 1000,
    },
    {
      name: "Medium",
      slices: 6,
      multiplier: 1.25,
      price: 700,
    },
    {
      name: "Small",
      slices: 5,
      multiplier: 1,
      price: 350,
    },
  ];

  toppings = [
    {
      name: "Ham",
      price: 200,
    },
    {
      name: "Bacon",
      price: 250,
    },
    {
      name: "Cheese",
      price: 100,
    },
    {
      name: "Olives",
      price: 300,
    },
    {
      name: "Green Pepper Bells",
      price: 75,
    },
    {
      name: "Pineapples",
      price: 125,
    },
    {
      name: "Chicken Strips",
      price: 375,
    },
    {
      name: "Beef Strips",
      price: 225,
    },
    {
      name: "Minced Beef",
      price: 375,
    },
  ];

  bases = [
    {
      name: "Shallow",
      price: 100,
    },
    {
      name: "Deep",
      price: 150,
    },
  ];

  //Pizza public Attributes

  this.total = 0; //grand total of all ingredients added
  this.sizeMultiplier = 0; //size multiplier for pizza extras i.e toppings and bases
  this.selectedToppings = []; //keeps track of the selected toppings
  this.cart = {}; //keeps track of the pizzas ingredients and price for each

  //   @type: private method
  //   @description: adds size item into the cart and updated total
  const billPizzaSize = (item) => {
    const subtotal = item.price;
    this.sizeMultiplier = item.multiplier;
    this.cart.size = { name: "Large Pizza", subtotal };
    this.total = subtotal;
    this.cart.total = this.total;
  };
}
