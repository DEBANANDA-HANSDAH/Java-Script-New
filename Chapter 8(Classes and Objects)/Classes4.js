//super keyword
class Person{
    constructor()
    {
        this.species="homo sapiens";
    }
    eat()
    {
        console.log("eat");
    }
}
class Engineer extends Person{
  constructor(branch)
  {
    super();
    this.branch=branch;
  }
 work()
 {
    console.log("Backend Devloper");
 }
}
let engObj=new Engineer("Backend Devloper");