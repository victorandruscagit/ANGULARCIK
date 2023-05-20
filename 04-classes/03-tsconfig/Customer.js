"use strict";
var Customer = /** @class */ (function () {
    function Customer(primul, doi) {
        this._firstName = primul;
        this._lastName = doi;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var customer = new Customer("calin", "goia");
console.log(customer.firstName);
console.log(customer.lastName);
