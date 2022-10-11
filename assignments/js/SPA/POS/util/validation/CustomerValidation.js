$("#txtCustomerID,#txtCustomerName,#txtCustomerAddress,#txtCustomerSalary").on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});

//Pattern Regex
var customerIDPattern = /^(C)[0-9]{3}$/;
var customerNamePattern = /^[A-z]{3,20}/;
var customerAddressPattern = /^^[A-z0-9 /,]{4,20}/;
var customerSalaryPattern = /^[0-9]{1,}[.]?[0-9]{1,2}/;
//focus textFields
// $("#btnSaveCustomer").attr('disabled',true);
// function saveBtnDisable(){
//     if( $('#lblCustomerIDValidate')$('#lblCustomerIDValidate').is(':visible') && $('#lblCustomerNameValidate').is(':visible') && $('#lblCustomerAddressValidate').is(':visible') && $('#lblCustomerSalaryValidate').is(':visible')){
//
//         $("#btnSaveCustomer").attr('disabled',false);
//
//     }
//     else {
//         $("#btnSaveCustomer").attr('disabled',true);
//     }
//
// }
$("#txtCustomerID").on('keyup', function (event) {

    if(customerIDPattern.test($("#txtCustomerID").val())){
        $("#txtCustomerID").css('border','2px solid green');
        $('#lblCustomerIDValidate').css('visibility','hidden');

        if (event.key == "Enter") {

            $("#txtCustomerName").focus();
        }


    }else {
        $("#txtCustomerID").css('border','2px solid red');

        $("#lblCustomerIDValidate").css('visibility','visible');
    }

});
$("#txtCustomerName").on('keyup', function (event) {

    if(customerNamePattern.test($("#txtCustomerName").val())){
        $("#txtCustomerName").css('border','2px solid green');
        $('#lblCustomerNameValidate').css('visibility','hidden');
        if (event.key == "Enter") {
            $("#txtCustomerAddress").focus();
        }


    }else {
        $("#txtCustomerName").css('border','2px solid red');

        $("#lblCustomerNameValidate").css('visibility','visible');
    }

});

$("#txtCustomerAddress").on('keyup', function (event) {
    if(customerAddressPattern.test($("#txtCustomerAddress").val())){
        $("#txtCustomerAddress").css('border','2px solid green');
        $('#lblCustomerAddressValidate').css('visibility','hidden');
        if (event.key == "Enter") {
            $("#txtCustomerSalary").focus();
        }


    }else {
        $("#txtCustomerAddress").css('border','2px solid red');

        $("#lblCustomerAddressValidate").css('visibility','visible');
    }

});

$("#txtCustomerSalary").on('keyup', function (event) {
    if(customerSalaryPattern.test($("#txtCustomerSalary").val())){
        $("#txtCustomerSalary").css('border','2px solid green');
        $('#lblCustomerSalaryValidate').css('visibility','hidden');
        if (event.key == "Enter") {
            $("#btnSaveCustomer").focus();
        }


    }else {
        $("#txtCustomerSalary").css('border','2px solid red');

        $("#lblCustomerSalaryValidate").css('visibility','visible');
    }

});

