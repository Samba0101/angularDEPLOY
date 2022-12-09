export class Client {
    

    id!: number;
    libelle!: string;
    tel!: string;
    contact!:string;
    email!: string ;
    fax!: string;
    login!: string ;
    pwd!: string ;
  //static email: any;


    getEmail():string{
        return this.email;
    }
    getPwd():string{
        return this.pwd
    }
}
