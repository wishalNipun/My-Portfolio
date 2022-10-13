function loadOrders(){
    $("#tblLoadOrders").empty();
    for(order of orders){
        var row = `<tr><td>${order.oid}</td><td>${order.cid}</td><td>${order.total}</td><td>${order.date}</td></tr>`;
        $("#tblLoadOrders").append(row);
    }
}
loadOrders();

function clickRowInOrderTable(){
    $("#tblLoadOrders>tr").click(function(){

        let oId = $(this).children(":eq(0)").text();


        console.log(oId);

    });
}
clickRowInOrderTable();