function loadAllCustomerIDS() {
    $("#selectCustomer").empty();
    for (let customer of customers) {
        $("#selectCustomer").append(`<option>${customer.id}</option>`);
    }
}

function loadAllItemIDS() {
    $("#selectItem").empty();
    for (let item of items) {
        $("#selectItem").append(`<option>${item.id}</option>`);
    }
}

$("#selectCustomer").click(function (){
    for (let customer of customers){
        if (customer.id == $("#selectCustomer").val()){
            $("#txtPOCustomerID").val(customer.id);
            $("#txtPOCustomerName").val(customer.name);
            $("#txtPOCustomerSalary").val(customer.salary);
            $("#txtPOCustomerAddress").val(customer.address);
        }
    }
});

$("#selectItem").click(function (){
    for (let item of items){
        if (item.id == $("#selectItem").val()){
            $("#txtPOItemID").val(item.id);
            $("#txtPOItemName").val(item.name);
            $("#txtPOItemPrice").val(item.price);
            $("#txtPOItemQtyOH").val(item.quantity);
        }
    }
});


