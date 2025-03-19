class User {
    
    name:string = '';
    email:string = '';
    password:string = '';
    phone:string = '';
    street:string = '';
    state:string = '';
    city:string = '';
    postalCode:string = '';
    constructor(name:string, email:string, password:string, phone:string, street:string, state:string, city:string, postalCode:string) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.street = street;
        this.state = state;
        this.city = city;
        this.postalCode = postalCode;
    }


}