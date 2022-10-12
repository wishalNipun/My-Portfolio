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

$("#btnAddToCart").click(function (){

    let orderID = $("#txtOrderId")
    let itemID = $("#txtPOItemID").val();
    let itemName = $("#txtPOItemName").val();
    let itemPrice = $("#txtPOItemPrice").val();
    let itemQuantity = $("#txtPOItemOrderQuantity").val();

    let itemTotalPrice = parseInt(itemPrice)* parseInt(itemQuantity);

    orderDetails.push(orderDetailModel(orderID,itemID,itemName,itemPrice,itemQuantity,itemTotalPrice));

    loadOrderDetailsTable();

});
function loadOrderDetailsTable(){

    $("#tableCart").empty();

    for(var orderDetail of orderDetails){
        var row = `<tr><td>${orderDetail.id}</td><td>${orderDetail.name}</td><td>${orderDetail.price}
                   </td><td>${orderDetail.quantity}</td><td>${orderDetail.total}</td></tr>`;
        $("#tableCart").append(row);
    }

}

