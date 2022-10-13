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
        $("#tblLoadOrderDetail").empty();
        let oId = $(this).children(":eq(0)").text();

        for (order of orderDetails){
            if(oId == order.oid){

                var row = `<tr><td>${order.oid}</td><td>${order.id}</td><td>${order.price}</td><td>${order.quantity}</td><td>${order.total}</td></tr>`;
                $("#tblLoadOrderDetail").append(row);

            }
        }

    });
}
