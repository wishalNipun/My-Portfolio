// loadAllCustomers in Table
function loadAllCustomer(){

    $("#tblCustomers").empty();

    for(var customer of customers){
        var row = `<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.salary}</td></tr>`;
        $("#tblCustomers").append(row);
    }

}

//disable tab key

//Save Customer Event
$("#btnSaveCustomer").click(function (){

    let customerID = $("#txtCustomerID").val();
    let customerName = $("#txtCustomerName").val();
    let customerAddress = $("#txtCustomerAddress").val();
    let customerSalary = $("#txtCustomerSalary").val();

    var customerObject ={

        id:customerID,
        name:customerName,
        address: customerAddress,
        salary:customerSalary
    }

    customers.push(customerObject);
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Customer Saved',
        showConfirmButton: false,
        timer: 1500
    })
    loadAllCustomer();
    bindRowClickEvent();
});


//Load All Customer Function
$("#btnAllCustomers").click(function (){

    loadAllCustomer();
    bindRowClickEvent();

});

//Table Row Click Function
function bindRowClickEvent(){
    $("#tblCustomers>tr").click(function(){
        let customerId =$(this).children(":eq(0)").text();
        let customerName =$(this).children(":eq(1)").text();
        let customerAddress =$(this).children(":eq(2)").text();
        let customerSalary =$(this).children(":eq(3)").text();

        $("#txtSearchCustomer").val(customerId);
        $("#txtCustomerUID").val(customerId);
        $("#txtCustomerUName").val(customerName);
        $("#txtCustomerUAddress").val(customerAddress);
        $("#txtCustomerUSalary").val(customerSalary);

    });
}


//disable tab key
$("#txtCustomerUID,#txtCustomerUName,#txtCustomerUAddress,#txtCustomerUSalary").on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});

//focus textFields
$("#txtCustomerUID").on('keyup', function (event) {

    if(customerIDPattern.test($("#txtCustomerUID").val())){
        $("#txtCustomerUID").css('border','2px solid green');
        $('#lblCustomerIDUValidate').css('visibility','hidden');
        if (event.key == "Enter") {
            $("#txtCustomerUName").focus();
        }


    }else {
        $("#txtCustomerUID").css('border','2px solid red');

        $("#lblCustomerIDUValidate").css('visibility','visible');
    }
});


$("#txtCustomerUName").on('keyup', function (event) {
    if(customerNamePattern.test($("#txtCustomerUName").val())){
        $("#txtCustomerUName").css('border','2px solid green');
        $('#lblCustomerNameUValidate').css('visibility','hidden');
        if (event.key == "Enter") {
            $("#txtCustomerUAddress").focus();
        }


    }else {
        $("#txtCustomerUName").css('border','2px solid red');

        $("#lblCustomerNameUValidate").css('visibility','visible');
    }
});

$("#txtCustomerUAddress").on('keyup', function (event) {
    if(customerAddressPattern.test($("#txtCustomerUAddress").val())){
        $("#txtCustomerUAddress").css('border','2px solid green');
        $('#lblCustomerAddressUValidate').css('visibility','hidden');
        if (event.key == "Enter") {
            $("#txtCustomerUSalary").focus();
        }


    }else {
        $("#txtCustomerUAddress").css('border','2px solid red');

        $("#lblCustomerAddressUValidate").css('visibility','visible');
    }
});

$("#txtCustomerUSalary").on('keyup', function (event) {
    if(customerSalaryPattern.test($("#txtCustomerUSalary").val())){
        $("#txtCustomerUSalary").css('border','2px solid green');
        $('#lblCustomerSalaryUValidate').css('visibility','hidden');
        if (event.key == "Enter") {
            $("#btnUpdateCustomer").focus();
        }


    }else {
        $("#txtCustomerUSalary").css('border','2px solid red');

        $("#lblCustomerSalaryUValidate").css('visibility','visible');
    }
});
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
            setUpdateTextfieldValues(customer.id, customer.name, customer.address, customer.salary)

            $("#tblCustomers").empty();
            var row = `<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.salary}</td></tr>`;
            $("#tblCustomers").append(row);
        }else {
            alert("customer not found")
            $("#txtSearchCustomer").val("");
        }
    }
});

function setUpdateTextfieldValues(id, name, address, salary) {
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
    if (response) {
        alert("Customer Updated Successfully");
        setUpdateTextfieldValues()("", "", "", "");
    } else {
        alert("Update Failed..!");

    }
});

