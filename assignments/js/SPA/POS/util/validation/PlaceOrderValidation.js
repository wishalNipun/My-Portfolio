$("#txtOrderId").attr('disabled',true);
$("#txtPOCustomerID").attr('disabled',true);
$("#txtPOCustomerName").attr('disabled',true);
$("#txtPOCustomerSalary").attr('disabled',true);
$("#txtPOCustomerAddress").attr('disabled',true);
$("#txtPOItemID").attr('disabled',true);
$("#txtPOItemName").attr('disabled',true);
$("#txtPOItemPrice").attr('disabled',true);
$("#txtPOItemQtyOH").attr('disabled',true);


let OIDRegex = /^(OID-)[0-9]{1,3}$/
let dateRegex = /^[0-9]{4}(.)[0-9]{2}(.)[0-9]{2}$/;

function clearTextFieldColor(){
    $("#txtDate").css('border','1px solid #ced4da');
    $("#txtCash").css('border','1px solid #ced4da');
    $("#txtPOItemOrderQuantity").css('border','1px solid #ced4da');
}

function validateTextCash(){
    $("#txtCash").on('keyup', function (event) {
        if( $("#txtCash")==""){
            $("#txtCash").css('border','2px solid red');
        }else {
            $("#txtCash").css('border','2px solid green');
        }
    });
}
function validateTextDate(){
    $("#txtDate").on('keyup', function (event) {
        if( $("#txtDate")==""){
            $("#txtDate").css('border','2px solid red');
        }else {
            $("#txtDate").css('border','2px solid green');
        }
    });
}
function validateTextOrderQuantity(){
    $("#txtPOItemOrderQuantity").on('keyup', function (event) {
        if( $("#txtPOItemOrderQuantity")==""){
            $("#txtPOItemOrderQuantity").css('border','2px solid red');
        }else {
            $("#txtPOItemOrderQuantity").css('border','2px solid green');
        }
    });
}
validateTextCash();
validateTextDate();
validateTextOrderQuantity();

