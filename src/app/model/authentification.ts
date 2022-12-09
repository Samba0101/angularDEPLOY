import { Client } from "./client";

export class Authentification extends Client{

    override email!: string ;
    override pwd!: string ;

    constructor(email: string,pwd: string ){
        super();
        this.email=email;

        this.pwd=pwd;
    }
    Authentification(email: string,pwd: string){
        this.email=email;
        this.pwd=pwd;

    }
    override getEmail():string{

        return this.email;
    }
    override getPwd():string{

        return this.pwd;
    }
}
