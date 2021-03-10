function generateInvoice(cart) {
  const generateInvoiceItem = (item) => {
    const itemHTML = document.createElement("p");
    itemHTML.innerText = item;
    itemHTML.setAttribute("class", "my-auto step-price text-white");

    return itemHTML;
  };

  const { size, base, toppings } = cart;

  const sizeName = size.name;
  const sizeSubtotal = size.subtotal;
  const baseName = base.name;
  const baseSubtotal = base.subtotal;

  document
    .getElementById("pizzaSizeNameContainer")
    .appendChild(generateInvoiceItem(sizeName));

  document
    .getElementById("pizzaSizeAmountContainer")
    .appendChild(generateInvoiceItem(sizeSubtotal));

  document
    .getElementById("pizzaBaseNameContainer")
    .appendChild(generateInvoiceItem(baseName));

  document
    .getElementById("pizzaBaseAmountContainer")
    .appendChild(generateInvoiceItem(baseSubtotal));

  toppings.forEach((topping) => {
    const toppingsName = topping.name;
    const toppingSubtotal = topping.subtotal;

    document
      .getElementById("pizzaToppingNameContainer")
      .appendChild(generateInvoiceItem(toppingsName));

    document
      .getElementById("pizzaToppingAmountContainer")
      .appendChild(generateInvoiceItem(toppingSubtotal));
  });
}
