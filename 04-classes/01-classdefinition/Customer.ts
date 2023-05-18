class Customer{
      private  firstName : string;
      private lastName: string;


      
constructor(primul:string, doi:string){
    this.firstName = primul;
    this.lastName = doi;
}


}

let myCustomer = new Customer("calin", "goia");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);