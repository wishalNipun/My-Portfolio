// loadAllItems in Table
function loadAllItem(){

    $("#tableItems").empty();

    for(var item of items){
        var row = `<tr><td>${item.id}</td><td>${item.name}</td><td>${item.price}</td><td>${item.quantity}</td></tr>`;
        $("#tableItems").append(row);
    }

}

//Save Item Event
$("#btnSaveItem").click(function (){

    let itemID = $("#txtItemID").val();
    let itemName = $("#txtItemName").val();
    let itemPrice = $("#txtItemPrice").val();
    let itemQuantity = $("#txtItemQuantity").val();

    var itemObject ={

        id : itemID,
        name : itemName,
        price : itemPrice,
        quantity: itemQuantity
    }

    items.push(itemObject);
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Customer Saved',
        showConfirmButton: false,
        timer: 1500
    })
    loadAllItem();
    clearAddTextFields();
    bindRowClickEvent();
});
function clearAddTextFields() {
    $("#txtItemID").val("");
    $("#txtItemName").val("");
    $("#txtItemPrice").val("");
    $("#txtItemQuantity").val("");
}
//Load All Item Function
$("#btnAllItems").click(function (){

    loadAllItem();
    bindRowClickEvent();

});

//Table Row Click Function
function bindRowClickEvent(){
    $("#tableItems>tr").click(function(){
        let itemID =$(this).children(":eq(0)").text();
        let itemName =$(this).children(":eq(1)").text();
        let itemPrice =$(this).children(":eq(2)").text();
        let itemQuantity =$(this).children(":eq(3)").text();

        $("#txtSearchItem").val(itemID);
        $("#txtItemUID").val(itemID);
        $("#txtItemUName").val(itemName);
        $("#txtItemUPrice").val(itemPrice);
        $("#txtItemUQuantity").val(itemQuantity);

    });
}

//Pattern Regex
var itemIDPattern = /^(I)[0-9]{3}$/;
var itemNamePattern = /^[A-z ]{3,20}/;
var itemPricePattern = /^[0-9]{1,}[.]?[0-9]{1,2}$/;
var itemQuantityPattern = /^[1-9][0-9]*?/;

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


    }else {
        $("#txtItemID").css('border','2px solid red');

        $("#lblItemIDValidate").css('visibility','visible');
    }
});
$("#txtItemName").on('keyup', function (event) {
    if(itemNamePattern.test($("#txtItemName").val())){
        $("#txtItemName").css('border','2px solid green');
        $('#lblItemNameValidate').css('visibility','hidden');
        if (event.key == "Enter") {
            $("#txtItemPrice").focus();
        }


    }else {
        $("#txtItemName").css('border','2px solid red');

        $("#lblCustomerIDValidate").css('visibility','visible');
    }
});
$("#txtItemPrice").on('keyup', function (event) {
    if(itemPricePattern.test($("#txtItemPrice").val())){
        $("#txtItemPrice").css('border','2px solid green');
        $('#lblItemPrice').css('visibility','hidden');
        if (event.key == "Enter") {
            $("#txtItemQuantity").focus();
        }


    }else {
        $("#txtItemPrice").css('border','2px solid red');

        $("#lblItemPrice").css('visibility','visible');
    }
});
$("#txtItemQuantity").on('keyup', function (event) {
    if(itemQuantityPattern.test($("#txtItemQuantity").val())){
        $("#txtItemQuantity").css('border','2px solid green');
        $('#lblItemQuantity').css('visibility','hidden');
        if (event.key == "Enter") {
            $("#btnSaveItem").focus();
        }


    }else {
        $("#txtItemQuantity").css('border','2px solid red');

        $("#lblItemQuantity").css('visibility','visible');
    }
});

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

//Search
function searchItem(ItemID){
    for(let item of items){
        if (item.id == ItemID){
            return item;
        }
    }
    return null;

}

$("#txtSearchItem").on('keyup',function (event){
    if(event.code == "Enter"){
        let item=searchItem($("#txtSearchItem").val())
        if (item!==null){
            $("#txtSearchItem").val(item.id);
            setUpdateTextFieldValues(item.id, item.name,item.price,item.quantity)

            $("#tableItems").empty();
            var row = `<tr><td>${item.id}</td><td>${item.name}</td><td>${item.price}</td><td>${item.quantity}</td></tr>`;
            $("#tableItems").append(row);
        }else {
            Swal.fire('item not found')
            $("#txtSearchItem").val("");
        }
    }
});

function setUpdateTextFieldValues(id, name, price, quantity) {
    $("#txtItemUID").val(id);
    $("#txtItemUName").val(name);
    $("#txtItemUPrice").val(price);
    $("#txtItemUQuantity").val(quantity);
}


//Delete
function deleteItem(itemId) {
    let item = searchItem(itemId);
    if (item != null) {
        let indexNumber = items.indexOf(item);
        items.splice(indexNumber, 1);
        loadAllItem();
        return true;
    } else {
        return false;
    }
}

$("#btnDeleteItem").click(function (){
    let deleteID = $("#txtSearchItem").val();

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            deleteItem(deleteID)
            $("#txtSearchItem").val("");
            Swal.fire(
                'Deleted!',
                'Customer is deleted.',
                'success'
            )

        }
    })

});

//Update

function updateItem(itemID) {
    let item = searchItem(itemID);
    if (item != null) {
        item.id = $("#txtItemUID").val();
        item.name = $("#txtItemUName").val();
        item.price = $("#txtItemUPrice").val();
        item.quantity = $("#txtItemUQuantity").val();
        loadAllItem();
        return true;
    } else {
        return false;
    }

}

$("#btnUpdateItem").click(function () {
    let itemID = $("#txtItemUID").val();
    let response = updateItem(itemID);
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Item Updated',
        showConfirmButton: false,
        timer: 1500
    })
    setUpdateTextFieldValues()("", "", "", "");
});

$('#btnClearItem').click(function (){
    $("#txtSearchItem").val("");
});