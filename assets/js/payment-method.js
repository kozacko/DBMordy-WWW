
    function highlightPayment(paymentId) {
    var payments = document.getElementsByClassName("payments-method");
    for (var i = 0; i < payments.length; i++) {
        payments[i].style.border = "none";
    }
  
    var selectedPayment = document.getElementById("payment" + paymentId);
    selectedPayment.style.border = "1.5px solid orange";
}

