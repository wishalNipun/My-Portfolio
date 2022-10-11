$('#navCustomer').css('display','none');
$('#navItem').css('display','none');
$('#navPlaceOrder').css('display','none');
$('#navOrderDetail').css('display','none');

$('#CustomerSection').css('display','none');
$('#ItemsSection').css('display','none');
$('#PlaceOrderSection').css('display','none');
$('#OrderDetailSection').css('display','none');

$('#btnCustomerViewMore').click(function (){
    $('#navHome').css('display','none');
    $('#navCustomer').css('display','');
    $('#navItem').css('display','none');
    $('#navPlaceOrder').css('display','none');
    $('#navOrderDetail').css('display','none');

    $('#CustomerSection').css('display','');
    $('#HomeSection').css('display','none');
    $('#ItemsSection').css('display','none');
    $('#PlaceOrderSection').css('display','none');
    $('#OrderDetailSection').css('display','none');


});

$('#btnItemsViewMore').click(function (){
    $('#navItem').css('display','block');
    $('#navPlaceOrder').css('display','none');
    $('#navOrderDetail').css('display','none');
    $('#navHome').css('display','none');
    $('#navCustomer').css('display','none');

    $('#CustomerSection').css('display','none');
    $('#HomeSection').css('display','none');
    $('#ItemsSection').css('display','');
    $('#PlaceOrderSection').css('display','none');
    $('#OrderDetailSection').css('display','none');

});
$('#btnPlaceOrderViewMore').click(function (){

    $('#navPlaceOrder').css('display','block');
    $('#navOrderDetail').css('display','none');
    $('#navItem').css('display','none');
    $('#navHome').css('display','none');
    $('#navCustomer').css('display','none');

    $('#CustomerSection').css('display','none');
    $('#HomeSection').css('display','none');
    $('#ItemsSection').css('display','none');
    $('#PlaceOrderSection').css('display','');
    $('#OrderDetailSection').css('display','none');

});
$('#btnOrderDetailsViewMore').click(function (){
    $('#navPlaceOrder').css('display','none');
    $('#navOrderDetail').css('display','block');
    $('#navItem').css('display','none');
    $('#navHome').css('display','none');
    $('#navCustomer').css('display','none');

    $('#CustomerSection').css('display','none');
    $('#HomeSection').css('display','none');
    $('#ItemsSection').css('display','none');
    $('#PlaceOrderSection').css('display','none');
    $('#OrderDetailSection').css('display','');
});

$('.Home').click(function (){
    $('#navHome').css('display','block');
    $('#navCustomer').css('display','none');
    $('#navItem').css('display','none');
    $('#navPlaceOrder').css('display','none');
    $('#navOrderDetail').css('display','none');

    $('#CustomerSection').css('display','none');
    $('#HomeSection').css('display','');
    $('#ItemsSection').css('display','none');
    $('#PlaceOrderSection').css('display','none');
    $('#OrderDetailSection').css('display','none');


});

$('.Customers').click(function (){
    $('#navHome').css('display','none');
    $('#navCustomer').css('display','block');
    $('#navItem').css('display','none');
    $('#navPlaceOrder').css('display','none');
    $('#navOrderDetail').css('display','none');

    $('#CustomerSection').css('display','');
    $('#HomeSection').css('display','none');
    $('#ItemsSection').css('display','none');
    $('#PlaceOrderSection').css('display','none');
    $('#OrderDetailSection').css('display','none');


});

$('.Items').click(function (){
    $('#navItem').css('display','block');
    $('#navPlaceOrder').css('display','none');
    $('#navOrderDetail').css('display','none');
    $('#navHome').css('display','none');
    $('#navCustomer').css('display','none');

    $('#CustomerSection').css('display','none');
    $('#HomeSection').css('display','none');
    $('#ItemsSection').css('display','');
    $('#PlaceOrderSection').css('display','none');
    $('#OrderDetailSection').css('display','none');

});
$('.PlaceOrder').click(function (){

    $('#navPlaceOrder').css('display','block');
    $('#navOrderDetail').css('display','none');
    $('#navItem').css('display','none');
    $('#navHome').css('display','none');
    $('#navCustomer').css('display','none');

    $('#CustomerSection').css('display','none');
    $('#HomeSection').css('display','none');
    $('#ItemsSection').css('display','none');
    $('#PlaceOrderSection').css('display','');
    $('#OrderDetailSection').css('display','none');

});
$('.OrderDetails').click(function (){
    $('#navPlaceOrder').css('display','none');
    $('#navOrderDetail').css('display','');
    $('#navItem').css('display','none');
    $('#navHome').css('display','none');
    $('#navCustomer').css('display','none');

    $('#CustomerSection').css('display','none');
    $('#HomeSection').css('display','none');
    $('#ItemsSection').css('display','none');
    $('#PlaceOrderSection').css('display','none');
    $('#OrderDetailSection').css('display','');
});