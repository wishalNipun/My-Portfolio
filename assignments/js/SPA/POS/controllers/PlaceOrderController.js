function loadAllCustomerIDS() {
    $("#txtCustomer").empty();
    for (let customer of customers) {
        $("#txtCustomer").append(`<option>${customer.id}</option>`);
    }
}

function loadAllItemIDS() {
    $("#txtItem").empty();
    for (let item of items) {
        $("#txtItem").append(`<option>${item.id}</option>`);
    }
}