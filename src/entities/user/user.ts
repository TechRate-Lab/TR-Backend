export class User {
<<<<<<< HEAD
    public id?: number;
=======
    public id?: string;
>>>>>>> 8660d66852fae6f6cec68edbead27d1c850f8c8a
    public name!: string;
    public email!: string;
    public password!: string;

    constructor(props:User, id?:string){
        Object.assign(this, props)
    }
  }