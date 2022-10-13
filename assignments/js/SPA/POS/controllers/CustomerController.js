function loadAllCustomer(){

    $("#tblCustomers").empty();

    for(var customer of customers){
        var row = `<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.salary}</td></tr>`;
        $("#tblCustomers").append(row);
    }

}

//Save Customer Event
$("#btnSaveCustomer").click(function (){

    let customerID = $("#txtCustomerID").val();
    let customerName = $("#txtCustomerName").val();
    let customerAddress = $("#txtCustomerAddress").val();
    let customerSalary = $("#txtCustomerSalary").val();

    customers.push(customerModel(customerID,customerName ,customerAddress,customerSalary));
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Customer Saved',
        showConfirmButton: false,
        timer: 1500
    })

    loadAllCustomer();
    loadAllCustomerIDS();
    bindCustomerTableRowClickEvent();
    clearCustomerAddTextFields();

});
function clearCustomerAddTextFields() {
    $("#txtCustomerID").val("");
    $("#txtCustomerName").val("");
    $("#txtCustomerAddress").val("");
    $("#txtCustomerSalary").val("");
}

//Load All Customer Function
$("#btnAllCustomers").click(function (){

    loadAllCustomer();
    bindCustomerTableRowClickEvent();

});

//Table Row Click Function
function bindCustomerTableRowClickEvent(){
    $("#tblCustomers>tr").click(function(){

        let customerId = $(this).children(":eq(0)").text();
        let customerName = $(this).children(":eq(1)").text();
        let customerAddress = $(this).children(":eq(2)").text();
        let customerSalary = $(this).children(":eq(3)").text();

        $("#txtSearchCustomer").val(customerId);
        $("#txtCustomerUID").val(customerId);
        $("#txtCustomerUName").val(customerName);
        $("#txtCustomerUAddress").val(customerAddress);
        $("#txtCustomerUSalary").val(customerSalary);

    });
}


//Search
function searchCustomer(CustomerID){
    for(let customer of customers){
        if (customer.id == CustomerID){
            return customer;
        }
    }
    return null;

}

$("#txtSearchCustomer").on('keyup',function (event){
    if(event.code == "Enter"){
        let customer=searchCustomer($("#txtSearchCustomer").val())
        if (customer!==null){
            $("#txtSearchCustomer").val(customer.id);
            setUpdateTextFieldValues(customer.id, customer.name, customer.address, customer.salary);

            $("#tblCustomers").empty();
            var row = `<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.salary}</td></tr>`;
            $("#tblCustomers").append(row);
        }else {
            Swal.fire('customer not found');
            $("#txtSearchCustomer").val("");
        }
    }
});

function setUpdateTextFieldValues(id, name, address, salary) {
    $("#txtCustomerUID").val(id);
    $("#txtCustomerUName").val(name);
    $("#txtCustomerUAddress").val(address);
    $("#txtCustomerUSalary").val(salary);
}
//Delete
function deleteCustomer(customerID) {
    let customer = searchCustomer(customerID);
    if (customer != null) {
        let indexNumber = customers.indexOf(customer);
        customers.splice(indexNumber, 1);
        loadAllCustomer();
        return true;
    } else {
        return false;
    }
}

$("#btnDeleteCustomer").click(function (){
    let deleteID = $("#txtSearchCustomer").val();

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
            deleteCustomer(deleteID)
            $("#txtSearchCustomer").val("");
            Swal.fire(
                'Deleted!',
                'Customer is deleted.',
                'success'
            )

        }
    })



});

//Update


function updateCustomer(customerID) {
    let customer = searchCustomer(customerID);
    if (customer != null) {
        customer.id = $("#txtCustomerUID").val();
        customer.name = $("#txtCustomerUName").val();
        customer.address = $("#txtCustomerUAddress").val();
        customer.salary = $("#txtCustomerUSalary").val();
        loadAllCustomer();
        return true;
    } else {
        return false;
    }

}
$("#btnUpdateCustomer").click(function () {
    let customerID = $("#txtCustomerUID").val();
    let response = updateCustomer(customerID);
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Customer Updated',
        showConfirmButton: false,
        timer: 1500
    })
    setUpdateTextFieldValues("", "", "", "");
});

$('#btnClearCustomer').click(function (){
    $("#txtSearchCustomer").val("");
});
