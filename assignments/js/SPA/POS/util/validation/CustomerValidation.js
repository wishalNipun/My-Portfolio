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

let cusID =false;
let cusName =false;
let cusAddress =false;
let cusSalary =false;
$("#btnSaveCustomer").attr('disabled',true);



$("#txtCustomerID").on('keyup', function (event) {

    if(customerIDPattern.test($("#txtCustomerID").val())){
        $("#txtCustomerID").css('border','2px solid green');
        $('#lblCustomerIDValidate').css('visibility','hidden');

        if (event.key == "Enter") {

            $("#txtCustomerName").focus();
        }

        cusID =true;
    }else {
        $("#txtCustomerID").css('border','2px solid red');

        $("#lblCustomerIDValidate").css('visibility','visible');

        cusID =false;
    }
    checkSaveValidation();
});
$("#txtCustomerName").on('keyup', function (event) {

    if(customerNamePattern.test($("#txtCustomerName").val())){
        $("#txtCustomerName").css('border','2px solid green');
        $('#lblCustomerNameValidate').css('visibility','hidden');
        if (event.key == "Enter") {
            $("#txtCustomerAddress").focus();
        }

        cusName =true;
    }else {
        $("#txtCustomerName").css('border','2px solid red');

        $("#lblCustomerNameValidate").css('visibility','visible');

        cusName =false;
    }
    checkSaveValidation();
});

$("#txtCustomerAddress").on('keyup', function (event) {
    if(customerAddressPattern.test($("#txtCustomerAddress").val())){
        $("#txtCustomerAddress").css('border','2px solid green');
        $('#lblCustomerAddressValidate').css('visibility','hidden');
        if (event.key == "Enter") {
            $("#txtCustomerSalary").focus();
        }

        cusAddress =true;

    }else {
        $("#txtCustomerAddress").css('border','2px solid red');

        $("#lblCustomerAddressValidate").css('visibility','visible');

        cusAddress =false;
    }
    checkSaveValidation();
});

$("#txtCustomerSalary").on('keyup', function (event) {
    if(customerSalaryPattern.test($("#txtCustomerSalary").val())){
        $("#txtCustomerSalary").css('border','2px solid green');
        $('#lblCustomerSalaryValidate').css('visibility','hidden');
        if (event.key == "Enter") {
            $("#btnSaveCustomer").focus();
        }
        cusSalary =true;

    }else {
        $("#txtCustomerSalary").css('border','2px solid red');

        $("#lblCustomerSalaryValidate").css('visibility','visible');

        cusSalary =false;
    }
    checkSaveValidation();
});

function checkSaveValidation(){
    if(cusID && cusName && cusAddress && cusSalary){
        $("#btnSaveCustomer").attr('disabled',false);

    }else {
        $("#btnSaveCustomer").attr('disabled',true);
    }
}

let cusUID =false;
let cusUName =false;
let cusUAddress =false;
let cusUSalary =false;
$("#btnUpdateCustomer").attr('disabled',true);



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

        cusUID =true;
    }else {
        $("#txtCustomerUID").css('border','2px solid red');

        $("#lblCustomerIDUValidate").css('visibility','visible');

        cusUID =false;
    }
    checkUpdateValidation();
});


$("#txtCustomerUName").on('keyup', function (event) {
    if(customerNamePattern.test($("#txtCustomerUName").val())){
        $("#txtCustomerUName").css('border','2px solid green');
        $('#lblCustomerNameUValidate').css('visibility','hidden');
        if (event.key == "Enter") {
            $("#txtCustomerUAddress").focus();
        }
        cusUName =true;

    }else {
        $("#txtCustomerUName").css('border','2px solid red');

        $("#lblCustomerNameUValidate").css('visibility','visible');

        cusUName =false;
    }
    checkUpdateValidation();
});

$("#txtCustomerUAddress").on('keyup', function (event) {
    if(customerAddressPattern.test($("#txtCustomerUAddress").val())){
        $("#txtCustomerUAddress").css('border','2px solid green');
        $('#lblCustomerAddressUValidate').css('visibility','hidden');
        if (event.key == "Enter") {
            $("#txtCustomerUSalary").focus();
        }

        cusUAddress =true;
    }else {
        $("#txtCustomerUAddress").css('border','2px solid red');

        $("#lblCustomerAddressUValidate").css('visibility','visible');

        cusUAddress =false;
    }
    checkUpdateValidation();
});

$("#txtCustomerUSalary").on('keyup', function (event) {
    if(customerSalaryPattern.test($("#txtCustomerUSalary").val())){
        $("#txtCustomerUSalary").css('border','2px solid green');
        $('#lblCustomerSalaryUValidate').css('visibility','hidden');
        if (event.key == "Enter") {
            $("#btnUpdateCustomer").focus();
        }

        cusUSalary =true;
    }else {
        $("#txtCustomerUSalary").css('border','2px solid red');

        $("#lblCustomerSalaryUValidate").css('visibility','visible');

        cusUSalary =false;
    }
    checkUpdateValidation();
});

function checkUpdateValidation(){
    if(cusUID && cusUName && cusUAddress && cusUSalary){
        $("#btnUpdateCustomer").attr('disabled',false);

    }else {
        $("#btnUpdateCustomer").attr('disabled',true);
    }
}