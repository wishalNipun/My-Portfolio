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
        if(!itemQuantity == ""){
            if(parseInt($("#txtPOItemQtyOH").val())>=itemQuantity && (itemQuantity > 0)){

                if(searchItemCart(itemID)){
                    for (let item of carT){
                        if (item.id == itemID){
                            let itemNewQuantity = parseInt(item.quantity) + parseInt(itemQuantity);
                            let itemNewTotal = parseInt(itemPrice) * itemNewQuantity;
                            item.quantity=itemNewQuantity;
                            item.total = itemNewTotal;
                            $("#txtPOItemOrderQuantity").css('border','1px solid #ced4da');
                        }
                    }
                }else{
                    carT.push(orderDetailModel(orderID,itemID,itemName,itemPrice,itemQuantity,itemTotalPrice));
                    $("#txtPOItemOrderQuantity").css('border','1px solid #ced4da');
                }
                updateItemArray(itemID,itemQuantity);
                clearCartItemTextFields();
                loadOrderDetailsTable();



            }else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'please Enter Lower Quantity!',

                })
                $("#txtPOItemOrderQuantity").css('border','2px solid red');
                $("#txtPOItemOrderQuantity").focus();
            }

        }else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'please Enter Quantity!',

            })
            $("#txtPOItemOrderQuantity").css('border','2px solid red');
            $("#txtPOItemOrderQuantity").focus();
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

function searchItemCart(itemID){

    for (item of carT){
        if (item.id == itemID){

            return true;
        }
    }
    return null;
}
function loadOrderDetailsTable(){

    $("#tableCart").empty();

    for(var orderDetail of carT){
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
    for (let item of carT){
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
    let total = $("#lblSubTotal").text();
    let date = $("#txtDate").val();
    let cash =$("#txtCash").val();

    if(!date == "" && !cash ==""){

        orders.push(orderModel(orderID,customerID,total,date));

        tableCartItemsTransferOrderDetail();
        loadOrders();
        clearAll();
        generateOrderID();
        clickRowInOrderTable();
        clearTextFieldColor();


    }else if(date == "" && !cash ==""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'please Enter Date!',

        })
        $("#txtDate").css('border','2px solid red');
        $("#txtCash").css('border','2px solid green');
        $("#txtDate").focus();
    }else if(!date == "" && cash == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'please Enter Cash!',

        })
        $("#txtCash").css('border','2px solid red');
        $("#txtDate").css('border','2px solid green');
        $("#txtCash").focus();
    }else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'please Enter Cash And Date !',

        })

        $("#txtDate").css('border','2px solid red');
        $("#txtDate").focus();
        $("#txtCash").css('border','2px solid red');
        $("#txtCash").focus();
    }


});

function tableCartItemsTransferOrderDetail(){
    for (let item of carT){
        orderDetails.push(item);
    }
    carT.splice(0,carT.length);

}

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

