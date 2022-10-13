function orderModel(orderID,customerID ,total,date) {
    return{
        oid: orderID,
        cid: customerID,
        total: total,
        date: date
    };
}