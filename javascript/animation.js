$(document).ready(function () {
  $("#stepOne").hide();
  $("#stepTwo").hide();
  $("#stepThree").hide();
  $("#paymentStep").hide();
});

// Step Sections Transitions
$("#loadStart").click(function () {
  $("#paymentStep").hide("drop", { direction: "up" }, 300, () => {
    location.reload();
  });
});

$("#startingButton").click(function () {
  $("#landing").hide("drop", { direction: "up" }, 300, () => {
    $("#stepOne").toggle("drop", { direction: "down" }, 500);
  });
});

$("#backToStart").click(function () {
  $("#landing").hide("drop", { direction: "up" }, 300, () => {
    $("#stepOne").show("drop", { direction: "down" }, 500);
  });
});

$("#loadStep2").click(function () {
  $("#stepOne").hide("drop", { direction: "up" }, 300, () => {
    $("#stepTwo").show("drop", { direction: "down" }, 500);
  });
});

$("#backToStep1").click(function () {
  $("#stepTwo").toggle("drop", { direction: "up" }, 300, () => {
    $("#stepOne").toggle("drop", { direction: "down" }, 500);
  });
});

$("#loadStep3").click(function () {
  $("#stepTwo").hide("drop", { direction: "up" }, 300, () => {
    $("#stepThree").show("drop", { direction: "down" }, 500);
  });
});

$("#backToStep2").click(function () {
  $("#stepThree").hide("drop", { direction: "up" }, 300, () => {
    $("#stepTwo").show("drop", { direction: "down" }, 500);
  });
});

$("#loadPayment").click(function () {
  $("#stepThree").hide("drop", { direction: "up" }, 300, () => {
    $("#paymentStep").show("drop", { direction: "down" }, 500);
  });
});

$("#backToStep3").click(function () {
  $("#paymentStep").hide("drop", { direction: "up" }, 300, () => {
    $("#stepThree").show("drop", { direction: "down" }, 500);
  });
});

// selection animations
$("#mega-pizza").click(function () {
  $("#megaPizza").toggleClass("selected");
  $("#loadStep2").toggleClass("disabled");
  $("#loadStep2").toggleClass("selected text-white");

  $("#large-pizza").toggleClass("disabled");
  $("#medium-pizza").toggleClass("disabled");
  $("#small-pizza").toggleClass("disabled");
});

$("#large-pizza").click(function () {
  $("#largePizza").toggleClass("selected");
  $("#loadStep2").toggleClass("disabled");
  $("#loadStep2").toggleClass("selected text-white");

  $("#mega-pizza").toggleClass("disabled");
  $("#medium-pizza").toggleClass("disabled");
  $("#small-pizza").toggleClass("disabled");
});

$("#medium-pizza").click(function () {
  $("#mediumPizza").toggleClass("selected");
  $("#loadStep2").toggleClass("disabled");
  $("#loadStep2").toggleClass("selected text-white");

  $("#large-pizza").toggleClass("disabled");
  $("#mega-pizza").toggleClass("disabled");
  $("#small-pizza").toggleClass("disabled");
});

$("#small-pizza").click(function () {
  $("#smallPizza").toggleClass("selected");
  $("#loadStep2").toggleClass("disabled");
  $("#loadStep2").toggleClass("selected text-white");

  $("#large-pizza").toggleClass("disabled");
  $("#medium-pizza").toggleClass("disabled");
  $("#mega-pizza").toggleClass("disabled");
});

$("#hamTopping").click(function () {
  $("#toppings-item-ham").toggleClass("selected");
  $("#loadStep3").removeClass("disabled");
  $("#loadStep3").addClass("selected text-white");
});

$("#baconTopping").click(function () {
  $("#toppings-item-bacon").toggleClass("selected");
  $("#loadStep3").removeClass("disabled");
  $("#loadStep3").addClass("selected text-white");
});

$("#cheeseTopping").click(function () {
  $("#toppings-item-cheese").toggleClass("selected");
  $("#loadStep3").removeClass("disabled");
  $("#loadStep3").addClass("selected text-white");
});

$("#olivesTopping").click(function () {
  $("#toppings-item-olives").toggleClass("selected");
  $("#loadStep3").removeClass("disabled");
  $("#loadStep3").addClass("selected text-white");
});

$("#greenPepperBells").click(function () {
  $("#toppings-item-pepperbells").toggleClass("selected");
  $("#loadStep3").removeClass("disabled");
  $("#loadStep3").addClass("selected text-white");
});

$("#pineappleTopping").click(function () {
  $("#toppings-item-pineapples").toggleClass("selected");
  $("#loadStep3").removeClass("disabled");
  $("#loadStep3").addClass("selected text-white");
  $("#loadStep3").addClass("selected text-white");
});

$("#shallowDish").click(function () {
  $("#shallow-dish").toggleClass("selected");
  $("#loadPayment").toggleClass("disabled");
  $("#loadPayment").toggleClass("selected text-white");
  $("#deepDish").toggleClass("disabled");
});
$("#deepDish").click(function () {
  $("#deep-dish").toggleClass("selected");
  $("#loadPayment").toggleClass("disabled");
  $("#loadPayment").toggleClass("selected text-white");
  $("#shallowDish").toggleClass("disabled");
});
