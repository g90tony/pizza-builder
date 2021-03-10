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
