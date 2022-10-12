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

    items.push(itemModel(itemID,itemName ,itemPrice,itemQuantity));
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