class Customer{
    private  _firstName : string;
    private _lastName: string;


    
constructor(primul:string, doi:string){
  this._firstName = primul;
  this._lastName = doi;
}


public get firstName(): string {
    return this._firstName;
}
public set firstName(value: string ) {
    this._firstName = value;

}

public get lastName(): string {
    return this._lastName;
}
public set lastName(value: string ) {
    this._lastName = value;

}

}



let customer = new Customer("calin", "goia");

console.log(customer.firstName);
console.log(customer.lastName);