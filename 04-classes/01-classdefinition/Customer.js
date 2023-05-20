var Customer = /** @class */ (function () {
    function Customer(primul, doi) {
        this.firstName = primul;
        this.lastName = doi;
    }
    return Customer;
}());
var myCustomer = new Customer("calin", "goia");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
