function generateOrderID() {
    if(orders.length===0){
        $('#txtOrderId').val('OID-001');
    }else{
        let split =  orders[orders.length-1].oid.split('-');
        let num =(+split[1])+1;
        $('#txtOrderId').val('OID-' + (String(num).padStart(3,'0')));
    }
}

generateOrderID();


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

    let orderID = $("#txtOrderId").val();
    let itemID = $("#txtPOItemID").val();
    let itemName = $("#txtPOItemName").val();
    let itemPrice = $("#txtPOItemPrice").val();
    let itemQuantity = $("#txtPOItemOrderQuantity").val();

    let itemTotalPrice = parseInt(itemPrice)* parseInt(itemQuantity);
        if(parseInt($("#txtPOItemQtyOH").val())>=itemQuantity && (itemQuantity > 0)){

            if(searchItem(itemID)){
                for (let item of orderDetails){
                    if (item.id == itemID){
                        let itemNewQuantity = parseInt(item.quantity) + parseInt(itemQuantity);
                        let itemNewTotal = parseInt(itemPrice) * itemNewQuantity;
                        item.quantity=itemNewQuantity;
                        item.total = itemNewTotal;
                    }
                }
            }else{
                orderDetails.push(orderDetailModel(orderID,itemID,itemName,itemPrice,itemQuantity,itemTotalPrice));
            }
            updateItemArray(itemID,itemQuantity);
            clearCartItemTextFields();
            loadOrderDetailsTable();


        }else {
            Swal.fire('Cannot Add To Cart');
        }

        calculation();
});

    function updateItemArray(itemID,itemQuantity){
        for (item of items){
            if(item.id == itemID){
                item.quantity = item.quantity - parseInt(itemQuantity)
                loadAllItem();
                loadAllItemIDS();
            }
        }
    }

function searchItem(itemID){

    for (item of orderDetails){
        if (item.id == itemID){

            return true;
        }
    }
    return null;
}
function loadOrderDetailsTable(){

    $("#tableCart").empty();

    for(var orderDetail of orderDetails){
        var row = `<tr><td>${orderDetail.id}</td><td>${orderDetail.name}</td><td>${orderDetail.price}
                   </td><td>${orderDetail.quantity}</td><td>${orderDetail.total}</td></tr>`;
        $("#tableCart").append(row);
    }

}

function clearCartItemTextFields(){
    $("#txtPOItemID").val("");
    $("#txtPOItemName").val("");
    $("#txtPOItemPrice").val("");
    $("#txtPOItemQtyOH").val("");
    $("#txtPOItemOrderQuantity").val("");
}

function calculation(){
    let total =0;
    for (let item of orderDetails){
        total +=item.total;
    }
    $("#lblTotal").text(total);

    let discount = parseInt($('#txtDiscount').val());
    let subTotal;
    if (discount >= 0) {
        subTotal = total - discount;
        $('#lblSubTotal').text(subTotal);
    } else {
        subTotal = total;
        $('#lblSubTotal').text(total);
    }
    let cash = parseInt($('#txtCash').val());
    if (cash > 0) {
        $('#lblBalance').text(cash - subTotal);
    } else {
        $('#lblBalance').text(0);
    }
}

$("#txtCash,#txtDiscount").keyup(function () {
    calculation();
});

$("#btnPlaceOrder").click(function (){
    let orderID = $("#txtOrderId").val();
    let customerID = $("#txtPOCustomerID").val();
    let total = $("#lblSubTotal").val();
    let date = $("#txtDate").val()

    orders.push(orderModel(orderID,customerID,total,date));
    clearAll();
    generateOrderID();
});

function clearAll (){
    $("#txtOrderId").val("");
    $("#txtPOCustomerID").val("");
    $("#txtPOCustomerName").val("");
    $("#txtPOCustomerSalary").val("");
    $("#txtPOCustomerAddress").val("");
    $("#lblTotal").text("0.0");
    $("#lblSubTotal").text("0.0");
    $("#lblBalance").text("0.0");
    $("#txtCash").val("");
    $("#txtDiscount").val("");
    $("#txtDate").val("");
    $("#tableCart").empty();

}
function searchOrder(orderID){

    for (item of orderDetails){
        if (item.id == itemID){

            return true;
        }
    }
    return null;
}
