function loadAllCustomerIDS() {
    $("#txtCustomer").empty();
    for (let customer of customers) {
        $("#txtCustomer").append(`<option>${customer.id}</option>`);
    }
}