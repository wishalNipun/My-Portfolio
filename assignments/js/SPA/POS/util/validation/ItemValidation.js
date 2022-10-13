//Pattern Regex
var itemIDPattern = /^(I)[0-9]{3}$/;
var itemNamePattern = /^[A-z ]{3,20}/;
var itemPricePattern = /^[0-9]{1,}[.]?[0-9]{1,2}$/;
var itemQuantityPattern = /^[1-9][0-9]*?/;


let itemID =false;
let itemName =false;
let itemPrice =false;
let itemQuantity =false;
$("#btnSaveItem").attr('disabled',true);
//disable tab key
$("#txtItemID,#txtItemName,#txtItemPrice,#txtItemQuantity").on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});
$("#txtItemID").on('keyup', function (event) {
    if(itemIDPattern.test($("#txtItemID").val())){
        $("#txtItemID").css('border','2px solid green');

        $('#lblItemIDValidate').css('visibility','hidden');

        if (event.key == "Enter") {
            $("#txtItemName").focus();
        }
        itemID =true;

    }else {
        $("#txtItemID").css('border','2px solid red');

        $("#lblItemIDValidate").css('visibility','visible');

        itemID =false;
    }
    checkItemSaveValidation();
});
$("#txtItemName").on('keyup', function (event) {
    if(itemNamePattern.test($("#txtItemName").val())){
        $("#txtItemName").css('border','2px solid green');
        $('#lblItemNameValidate').css('visibility','hidden');
        if (event.key == "Enter") {
            $("#txtItemPrice").focus();
        }

        itemName =true;
    }else {
        $("#txtItemName").css('border','2px solid red');

        $("#lblCustomerIDValidate").css('visibility','visible');

        itemName =false;
    }
    checkItemSaveValidation();
});
$("#txtItemPrice").on('keyup', function (event) {
    if(itemPricePattern.test($("#txtItemPrice").val())){
        $("#txtItemPrice").css('border','2px solid green');
        $('#lblItemPrice').css('visibility','hidden');
        if (event.key == "Enter") {
            $("#txtItemQuantity").focus();
        }

        itemPrice =true;
    }else {
        $("#txtItemPrice").css('border','2px solid red');

        $("#lblItemPrice").css('visibility','visible');

        itemPrice =false;
    }
    checkItemSaveValidation();
});
$("#txtItemQuantity").on('keyup', function (event) {
    if(itemQuantityPattern.test($("#txtItemQuantity").val())){
        $("#txtItemQuantity").css('border','2px solid green');
        $('#lblItemQuantity').css('visibility','hidden');
        if (event.key == "Enter") {
            $("#btnSaveItem").focus();
        }

        itemQuantity =true;
    }else {
        $("#txtItemQuantity").css('border','2px solid red');

        $("#lblItemQuantity").css('visibility','visible');

        itemQuantity =false;
    }
    checkItemSaveValidation();
});

function checkItemSaveValidation(){
    if(itemID && itemName && itemPrice && itemQuantity){
        $("#btnSaveItem").attr('disabled',false);

    }else {
        $("#btnSaveItem").attr('disabled',true);
    }
}

//disable tab key update text fields
$("#txtItemUID,#txtItemUName,#txtItemUPrice,#txtItemUQuantity").on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});
$("#txtItemUID").on('keyup', function (event) {
    if(itemIDPattern.test($("#txtItemUID").val())){
        $("#txtItemUID").css('border','2px solid green');

        $('#lblItemUIDValidate').css('visibility','hidden');

        if (event.key == "Enter") {
            $("#txtItemUName").focus();
        }


    }else {
        $("#txtItemUID").css('border','2px solid red');

        $("#lblItemUIDValidate").css('visibility','visible');
    }
});
$("#txtItemUName").on('keyup', function (event) {
    if(itemNamePattern.test($("#txtItemUName").val())){
        $("#txtItemUName").css('border','2px solid green');
        $('#lblItemUNameValidate').css('visibility','hidden');
        if (event.key == "Enter") {
            $("#txtItemUPrice").focus();
        }


    }else {
        $("#txtItemUName").css('border','2px solid red');

        $("#lblCustomerNameUValidate").css('visibility','visible');
    }
});
$("#txtItemUPrice").on('keyup', function (event) {
    if(itemPricePattern.test($("#txtItemUPrice").val())){
        $("#txtItemUPrice").css('border','2px solid green');
        $('#lblItemUPrice').css('visibility','hidden');
        if (event.key == "Enter") {
            $("#txtItemUQuantity").focus();
        }


    }else {
        $("#txtItemPrice").css('border','2px solid red');

        $("#lblItemUPrice").css('visibility','visible');
    }
});
$("#txtItemUQuantity").on('keyup', function (event) {
    if(itemQuantityPattern.test($("#txtItemUQuantity").val())){
        $("#txtItemUQuantity").css('border','2px solid green');
        $('#lblItemUQuantity').css('visibility','hidden');
        if (event.key == "Enter") {
            $("#btnSaveItem").focus();
        }


    }else {
        $("#txtItemUQuantity").css('border','2px solid red');

        $("#lblItemUQuantity").css('visibility','visible');
    }
});